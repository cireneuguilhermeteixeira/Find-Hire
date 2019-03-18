import {Injectable} from "@angular/core";

declare var $: any;

@Injectable()
export class ConfigService {

    public app: any;
    public appLayout: any;
    public breakpoint: any;
    private ip : String;

    constructor() {
        this.ip = "https://senderwebservice.herokuapp.com/";
        this.app = {
            name: "Template",
            urlBase: "https://senderwebservice.herokuapp.com/api/v1"
        };
        this.appLayout = {
            isApp_Boxed: false,
            isApp_BackdropVisible: false,
            isApp_SidebarRightOpen: false,
            isApp_SidebarLeftCollapsed: false,
            isApp_MobileSidebarLeftOpen: false
        };
        this.breakpoint = {
            mobile: 576,
            tablet: 768,
            desktop: 992,
            desktopLG: 1280
        };
    }
}