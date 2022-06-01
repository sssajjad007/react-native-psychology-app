import { makeObservable, observable, action } from "mobx";

class NetInfo {
  constructor() {
    makeObservable(this, {
      isConnected: observable,
      internetAvailable: observable,
      vpn: observable,
      setConnection: action,
      setInternet: action,
      setVpn: action,
    });
  }
  /**
   * if there is an active network connection 
   * isConnected is set to true
   * this does not necessarily means internet is reachable
   */
  isConnected: boolean = true;
  /**
   * if connection is available and internet is reachable
   */
  internetAvailable: boolean = true;
  /**
   * if user is using an active vpn connection
   * this can be used to route user to a better server in client side
   * although this should be implemented in server side
   */
  vpn: boolean = false;
  /**
   * if connection is active and internet is reachable
   * use this property for most of your assumption about network access
   */
  get hasAccess(): boolean {
    return this.isConnected && this.internetAvailable;
  }
  setConnection(status: boolean) {
    this.isConnected = status;
  }
  setInternet(status: boolean) {
    this.internetAvailable = status;
  }
  setVpn(status: boolean) {
    this.vpn = status;
  }
}

export const netInfoState = new NetInfo();
