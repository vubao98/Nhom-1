import { CheckboxSelection } from './checkbox-selected.model';

export interface DictionarySelectedItem extends CheckboxSelection {
    id: number;
    text: string;
}
