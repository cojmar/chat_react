import { Severities } from './severities';

export interface AppButton {
    icon?: string;
    label?: string;
    severity?: Severities;
    onClick?: () => void;
}
