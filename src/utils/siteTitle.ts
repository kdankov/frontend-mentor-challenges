export default function siteTitle(siteTitle: string, pageTitle: string) {
    
    let titleTag = '';

    if ( pageTitle ) {
        titleTag = pageTitle + ' - ' + siteTitle;
    } else {
        titleTag = siteTitle;
    }

    return titleTag;
}