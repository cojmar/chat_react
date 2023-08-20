import './ThemeSwitchDialog.scss';
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { ThemeOptions } from './ThemeSwitchOptions';
import { Button } from 'primereact/button';


const ThemeSwitchDialog = (props: { isVisible: boolean, onCloseDialog(): void }) => {
    const [themeOptions] = useState(ThemeOptions);

    const switchTheme = (htmlPath: string) => {
        let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
        themeLink.href = `${process.env.PUBLIC_URL}/themes/${htmlPath}/theme.css`;
    };

    const renderThemeItem = () => {
        return Object.values(themeOptions).map((theme, index) => {
            return <div key={index}>
                <p className="switch-theme-separator">{theme.title}</p>
                {theme.items.map((item, i) => {
                    return (
                        <div key={i} className="switch-theme-item">
                            <Button
                                rounded
                                text
                                onClick={() => switchTheme(item.path)}
                                className="select-theme-button">
                                {item.image
                                    ? <img alt={item.name} src={`img/theme-icons/${item.image}`}></img>
                                    : <i className="pi pi-ban"></i>
                                }
                            </Button>
                            <span>{item.name}</span>
                        </div>
                    )
                })}
            </div>
        })
    }

    return (
        <section className="switch-theme-dialog-container">
            <Dialog
                header="Switch theme"
                visible={props.isVisible}
                style={{ width: '50vw' }}
                breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                onHide={() => props.onCloseDialog()}>
                {/*<p className="switch-theme-separator">Lorem Ipsum</p>*/}
                {renderThemeItem()}
            </Dialog>
        </section>
    );
}

export default ThemeSwitchDialog;
