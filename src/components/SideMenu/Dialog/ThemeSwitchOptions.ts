export interface ThemeSwitch {
    [name: string]: {
        title: string;
        items: {
            path: string;
            image: string;
            name: string;
        }[];
    };
}

export const ThemeOptions: ThemeSwitch = {
    bootstrap: {
        title: 'Bootstrap',
        items: [
            { name: 'blue', path: 'bootstrap4-dark-blue', image: 'bootstrap4-dark-blue.svg' },
            { name: 'purple', path: 'bootstrap4-dark-purple', image: 'bootstrap4-dark-purple.svg' },
            { name: 'blue', path: 'bootstrap4-light-blue', image: 'bootstrap4-light-blue.svg' },
            { name: 'purple', path: 'bootstrap4-light-purple', image: 'bootstrap4-light-purple.svg' },
        ]
    },
    fluentUI: {
        title: 'Fluent UI',
        items: [
            { name: 'light', path: 'fluent-light', image: 'fluent-light.png' },
        ]
    },
    materialDesign: {
        title: 'Material Design',
        items: [
            { name: 'deep purple', path: 'md-dark-deeppurple', image: 'md-dark-deeppurple.svg' },
            { name: 'indigo', path: 'md-dark-indigo', image: 'md-dark-indigo.svg' },
            { name: 'deep purple', path: 'md-light-deeppurple', image: 'md-light-deeppurple.svg' },
            { name: 'indigo', path: 'md-light-indigo', image: 'md-light-indigo.svg' },
        ]
    },
    materialDesignCompact: {
        title: 'Material Design Compact',
        items: [
            { name: 'deep purple', path: 'mdc-dark-deeppurple', image: 'md-dark-deeppurple.svg' },
            { name: 'indigo', path: 'mdc-dark-indigo', image: 'md-dark-indigo.svg' },
            { name: 'deep purple', path: 'mdc-light-deeppurple', image: 'md-light-deeppurple.svg' },
            { name: 'indigo', path: 'mdc-light-indigo', image: 'md-light-indigo.svg' },
        ]
    },
    miscellaneous: {
        title: 'Miscellaneous',
        items: [
            { name: 'mira', path: 'mira', image: 'mira.jpg' },
            { name: 'nano', path: 'nano', image: 'nano.jpg' },
            { name: 'soho dark', path: 'soho-dark', image: 'soho-dark.png' },
            { name: 'soho light', path: 'soho-light', image: 'soho-light.png' },
            { name: 'viva dark', path: 'viva-dark', image: 'viva-dark.svg' },
            { name: 'viva light', path: 'viva-light', image: 'viva-light.svg' },
            // TODO images
            { name: 'luna amber', path: 'luna-amber', image: '' },
            { name: 'luna blue', path: 'luna-blue', image: '' },
            { name: 'luna green', path: 'luna-green', image: '' },
            { name: 'luna pink', path: 'luna-pink', image: '' },
            { name: 'nova', path: 'nova', image: '' },
            { name: 'nova accent', path: 'nova-accent', image: '' },
            { name: 'nova alt', path: 'nova-alt', image: '' },
            { name: 'rhea', path: 'rhea', image: '' },
        ]
    },
    primeOne: {
        title: 'Prime One',
        items: [
            { name: 'lara blue', path: 'lara-dark-blue', image: 'lara-dark-blue.png' },
            { name: 'lara indigo', path: 'lara-dark-indigo', image: 'lara-dark-indigo.png' },
            { name: 'lara purple', path: 'lara-dark-purple', image: 'lara-dark-purple.png' },
            { name: 'lara teal', path: 'lara-dark-teal', image: 'lara-dark-teal.png' },
            { name: 'lara blue', path: 'lara-light-blue', image: 'lara-light-blue.png' },
            { name: 'lara indigo', path: 'lara-light-indigo', image: 'lara-light-indigo.png' },
            { name: 'lara purple', path: 'lara-light-purple', image: 'lara-light-purple.png' },
            { name: 'lara teal', path: 'lara-light-teal', image: 'lara-light-teal.png' },
        ]
    },
    primeOneLegacy: {
        title: 'Prime One Legacy',
        items: [
            { name: 'arya blue', path: 'arya-blue', image: 'arya-blue.png' },
            { name: 'arya green', path: 'arya-green', image: 'arya-green.png' },
            { name: 'arya orange', path: 'arya-orange', image: 'arya-orange.png' },
            { name: 'arya purple', path: 'arya-purple', image: 'arya-purple.png' },
            { name: 'saga blue', path: 'saga-blue', image: 'saga-blue.png' },
            { name: 'saga green', path: 'saga-green', image: 'saga-green.png' },
            { name: 'saga orange', path: 'saga-orange', image: 'saga-orange.png' },
            { name: 'saga purple', path: 'saga-purple', image: 'saga-purple.png' },
            { name: 'vela blue', path: 'vela-blue', image: 'vela-blue.png' },
            { name: 'vela green', path: 'vela-green', image: 'vela-green.png' },
            { name: 'vela orange', path: 'vela-orange', image: 'vela-orange.png' },
            { name: 'vela purple', path: 'vela-purple', image: 'vela-purple.png' },
        ]
    },
    tailwind: {
        title: 'Tailwind',
        items: [
            {  name: 'tailwind light', path: 'tailwind-light', image: 'tailwind-light.png' },
        ]
    }
};

