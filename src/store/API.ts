//const apiDomain = "https://ufostore.herokuapp.com/";
const apiDomain = "https://ubackstore.herokuapp.com/";
const apiDomainBackup = "https://ufoback.herokuapp.com/";

/* Global */
async function safeAPICall(requestUrl) {
    const timeout = 1500;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(apiDomain + requestUrl, {
        signal: controller.signal
    }).catch(async _ => await fetch(apiDomainBackup + requestUrl, {
        signal: controller.signal
    }));
    clearTimeout(id);

    return await response.json();
}

export function GetCurrentPage(){
    var pathname = window.location.pathname;
    if (pathname.indexOf('partners') == 1) {
        return 'partners';
    }
    if (pathname.indexOf('products') == 1) {
        return 'products';
    }
    return 'products';
}

export async function GetPartners() {
    return await safeAPICall('main/GetPartners');
}

export async function SearchProducts(query, p, tid, pid) {
    return await safeAPICall('main?query=' + (query ? query : '') + '&p=' + p + '&tid=' + (tid ? tid : '') + '&pid=' + (pid ? pid: ''));
}
