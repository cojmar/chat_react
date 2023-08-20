import './SideMenu.scss';
import {Button} from 'primereact/button';
import {useState} from "react";
import {Severities} from "../../shared/severities";
import {AppButton} from '../../shared/app-button.model';
import ThemeSwitchDialog from './Dialog/ThemeSwitchDialog';


const SideMenu = (props: {}) => {
    const buttons: AppButton[] = [
        {icon: 'pi pi-desktop', label: 'Themes', severity: Severities.secondary, onClick: () => setIsThemeSwitchDialogVisible(true)},
        // {icon: 'pi pi-bookmark', label: 'Bookmark', severity: Severities.secondary, onClick: () => {}},
        {icon: 'pi pi-search', label: 'Search', severity: Severities.success, onClick: () => {}},
        {icon: 'pi pi-user', label: 'User', severity: Severities.info, onClick: () => {}},
        {icon: 'pi pi-bell', label: 'Notification', severity: Severities.warning, onClick: () => {}},
        {icon: 'pi pi-heart', label: 'Favorite', severity: Severities.help, onClick: () => {}},
        {icon: 'pi pi-times', label: 'Cancel', severity: Severities.danger, onClick: () => {}},
    ];
    const [isExpanded, setIsExpanded] = useState(false);
    const [isThemeSwitchDialogVisible, setIsThemeSwitchDialogVisible] = useState(false);

    const setActiveClass = () => isExpanded ? '' : 'on';
    const handleSideMenuToggle = () => {
        setIsExpanded(!isExpanded);
        document.body.classList.toggle('side-menu-on', !isExpanded);
    }

    const renderMenuItems = () => buttons.map((button, index) => (
        <li className="side-menu-item" key={index}>
            <Button
                rounded
                text
                onClick={button.onClick}
                icon={button.icon}
                severity={button.severity}
                aria-label={button.label}/>
        </li>
    ));

    return (
        <>
            <section className="side-menu-container">
                <ul className={`side-menu ${setActiveClass()}`}>
                    <li className={`side-menu-item ${setActiveClass()}`}>
                        <Button onClick={() => handleSideMenuToggle()} icon="pi pi-cog" rounded text
                                aria-label="Filter"/>
                    </li>
                    {renderMenuItems()}
                </ul>
            </section>
            <ThemeSwitchDialog
                isVisible={isThemeSwitchDialogVisible}
                onCloseDialog={() => setIsThemeSwitchDialogVisible(false)} />
        </>
    );
}

export default SideMenu;
