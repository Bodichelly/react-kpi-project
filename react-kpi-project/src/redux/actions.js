import appActions from "./appActions";
import messageActions from "./messageActions";
import searchActions from "./searchActions";
import userActions from "./userActions";

export default {
    ...appActions,
    ...searchActions,
    ...messageActions,
    ...userActions
}