import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { ApiService } from "./api.service";
import { SessionService } from "./session.service";
import { UserModel } from "../models/user/user.model";

@Injectable()
export class UserService {
    constructor(
        private apiService: ApiService,
        private sessionService: SessionService
    ) {}
    get employeeId() {
        return this.sessionService.currentUser.employeeId;
    }

    setAuth(session: any) {
        this.sessionService.saveSession(session);
        this.getUserProfile().subscribe(result =>
            this.sessionService.saveUserInfo(result)
        );
    }

    purgeAuth() {
        this.sessionService.destroySession();
    }

    attemptAuth(type, username, password): Observable<any> {
        const route = type === "login" ? "/login" : "";
        return this.apiService
            .postNoHeader(route, {
                username: username,
                password: password
            })
            .map(data => {
                this.setAuth(data.result);
                return data.result;
            });
    }

    changePassword(
        email: string,
        oldPassword: string,
        newPassword: string
    ): Observable<any> {
        return this.apiService
            .post("/users/password/change", {
                username: email,
                oldPassword: oldPassword,
                newPassword: newPassword
            })
            .map(data => {
                return data;
            });
    }

    getActiveCode(email: string): Observable<any> {
        const url = `/users/password/forgot`;
        return this.apiService
            .post(url, {
                email: email
            })
            .map(data => {
                return data.result;
            });
    }

    validateActiveCode(recoverCode: string): Observable<any> {
        const url = `/users/password/validate?token=${recoverCode}`;
        return this.apiService.get(url).map(data => {
            return data.result;
        });
    }

    resetPassword(recoverCode: string, newPassword: string): Observable<any> {
        const url = `/users/password/new`;
        return this.apiService
            .post(url, {
                token: recoverCode,
                newPassword: newPassword
            })
            .map(data => {
                return data.result;
            });
    }

    logOut(): Observable<any> {
        return this.apiService.post("/logout").map(data => {
            return data;
        });
    }

    // updateUserProfile(formValue: any): Observable<UserModel> {
    //   const url = `/employee/${this.employeeId}/edit`;
    //   return this.apiService.post(url, formValue)
    //     .map(response => {
    //       return {
    //         firstName: response.result.firstName,
    //         lastName: response.result.lastName,
    //         fullName: `${response.result.lastName} ${response.result.firstName}`,
    //         phone: response.result.phone,
    //         dob: response.result.dob,
    //         email: response.result.email,
    //         address: response.result.address,
    //         gender: response.result.gender,
    //       };
    //     });
    // }

    getUserProfile(): Observable<UserModel> {
        const url = `/employee/${this.employeeId}`;
        return this.apiService
            .get(url)
            .map(response => this.toUserModel(response.result))
            .share();
    }

    toUserModel(result: any) {
        return {
            id: result.id,
            firstName: result.firstName,
            lastName: result.lastName,
            fullName: `${result.lastName}  ${result.firstName}`,
            dob: result.dob,
            phone: result.phone,
            email: result.email,
            address: result.address,
            gender: "",
            avatar: result.avatar
        };
    }

    upLoadAvatar(avatar: string): Observable<any> {
        const url = `/employee/${this.employeeId}/edit`;
        return this.apiService
            .post(url, { avatar: avatar })
            .map(response => this.toUserModel(response.result))
            .share();
    }

    getAvatarByUserId(id: number | string) {
        const url = `employee/${this.employeeId}/avatar/${id}`;
        return this.apiService
            .get(url)
            .map(response => response.result)
            .share();
    }
}
