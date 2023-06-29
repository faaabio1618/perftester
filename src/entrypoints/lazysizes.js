import lazySizes from 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes/plugins/native-loading/ls.native-loading';

lazySizes.cfg.lazyClass = 'lazy';
lazySizes.cfg.init = false;
lazySizes.cfg.preloadAfterLoad = false;
lazySizes.cfg.loadMode = 1;
lazySizes.cfg.nativeLoading = {
    setLoadingAttribute: true,
    disableListeners: {
        focus: false,
        mouseover: false,
        click: false,
        load: false,
        transitionend: false,
        animationend: false,
        scroll: true,
        resize: true
    }
};