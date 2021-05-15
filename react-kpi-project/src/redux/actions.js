import appActions from "./appActions";
import messageActions from "./messageActions";
import searchActions from "./searchActions";

export default {
    ...appActions,
    ...searchActions,
    ...messageActions
}