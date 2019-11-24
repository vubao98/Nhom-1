import { DictionaryItem } from './dictionary-item.model';

export interface DictionaryEditItem extends DictionaryItem {
    edit: boolean;
}
