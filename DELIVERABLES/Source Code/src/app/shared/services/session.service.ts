import { Injectable } from '@angular/core';
import { UserModel } from '../models/user/user.model';
// tslint:disable-next-line:import-blacklist
import { Subject, Observable } from 'rxjs';
import { NotificationItem } from '../models/index';

@Injectable()
export class SessionService {
    private userSubject = new Subject<UserModel>();
    private avatarSubject = new Subject<string>();
    private fileSubject = new Subject<Blob>();
    public imageFile: File;
    public previousUrl = '';
    getToken(): String {
        return this.currentSession && this.currentSession.token;
    }

    get currentUser() {
        if (!this.currentSession) {
            return null;
        }

        return {
            userId: this.currentSession.userId,
            employeeId: this.currentSession.objectId,
            userName: this.currentSession.userName,
            email: this.currentSession.email
        };
    }

    get currentSession() {
        if (!window.localStorage['mhbSession']) {
            return null;
        }

        return JSON.parse(window.localStorage['mhbSession']);
    }

    saveSession(session: String) {
        window.localStorage['mhbSession'] = JSON.stringify(session);
    }

    getSession() {
        if (!window.localStorage.getItem('mhbSession')) {
          return null;
        }
        return JSON.parse(window.localStorage.getItem('mhbSession'));
    }

    saveUserInfo(userInfo: UserModel) {
        this.userSubject.next(userInfo);
        window.localStorage['mhbUserInfo'] = JSON.stringify(userInfo);
    }

    saveAvatarContact(avatarString: string) {
        this.avatarSubject.next(avatarString);
        window.localStorage['avatarContact'] = avatarString;
    }

    getFileImage(): Observable<Blob> {
        return this.fileSubject.asObservable();
    }

    saveNotificationList(notification: any) {
        window.localStorage['listsNotification'] = JSON.stringify(notification);
    }

    getAvatarContact(): Observable<string> {
        return this.avatarSubject.asObservable();
    }

    saveFileImage(file: Blob) {
        this.fileSubject.next(file);
    }

    getUserInfo(): Observable<UserModel> {
        return this.userSubject.asObservable();
    }

    get userInfo(): UserModel {
        if (!window.localStorage['mhbUserInfo']) {
            return new UserModel();
        }

        return JSON.parse(window.localStorage['mhbUserInfo']);
    }

    destroySession() {
        // window.localStorage.clear();
        window.localStorage.removeItem('mhbUserInfo');
        window.localStorage.removeItem('mhbSession');
    }

    set branchId(id: number) {
        window.localStorage['branchId'] = id;
    }

    get branchId(): number {
        return window.localStorage['branchId'];
    }
}
