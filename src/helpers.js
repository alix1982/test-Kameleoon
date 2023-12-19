// получение адреса ресурса без протокола и "www"
const _clipNameSites = (urlSite) => {
    let siteName = new URL(urlSite).host.split('.');
    siteName[0] === 'www' && siteName.splice(0, 1);
    return siteName.join('.')
}

export const searchSiteId = (id, sitesArr) => {
    let urlMin = '';
    sitesArr.forEach((site) => (site.id === id) && (urlMin = _clipNameSites(site.url)))
    return urlMin
}

// перевод текста в нужный регистр
export const transformRegister = (text) => {
    return (text.length <= 3 ? text : `${text[0].toUpperCase()}${text.substring(1).toLowerCase()}`)
}

// добавление id статуса для сортировки
export const addStatusId = (status) => {
    let statusId = 0;

    switch(status) {
        case 'ONLINE':
          statusId = 1;
        break;
      case 'PAUSED':
          statusId = 2;
        break;
      case 'STOPPED':
          statusId = 3;
        break;
      case 'DRAFT':
          statusId = 4;
        break;
      default:
          statusId = 5;
        break;
      }
      return statusId;
}

// сортировка
const _sortField = ( a, b, field ) => {
    let x = '';
    let y = '';
    switch(field) {
      case 'status':
        x = b.statusId;
        y = a.statusId;
    break;
    case 'name':
        x = b.name;
        y = a.name;
    break;
    case 'type':
        x = b.type;
        y = a.type;
    break;
    case 'site':
        x = b.siteId;
        y = a.siteId;
    break;
    default:
        x = '';
        y = '';
    break;
    }
    if (x < y) {return -1}
    if (x > y) {return 1}
    return 0;
}

const _sortFields = (field, isSortField, arr, setArr) => {
    isSortField ?
    setArr(arr.sort((a, b)=>_sortField(a, b, field))) :
    setArr(arr.sort((b, a)=>_sortField(a, b, field)))
}

const _sortName = (arr, setArr, isSortName, setIsSortName) => {
    setIsSortName(!isSortName);
    _sortFields('name', isSortName, arr, setArr);
}
const _sortType = (arr, setArr, isSortType, setIsSortType) => {
    setIsSortType(!isSortType);
    _sortFields('type', isSortType, arr, setArr);
}
const _sortSite = (arr, setArr, isSortSite, setIsSortSite) => {
    setIsSortSite(!isSortSite);
    _sortFields('site', isSortSite, arr, setArr);
}
const _sortStatus = (arr, setArr, isSortStatus, setIsSortStatus) => {
    setIsSortStatus(!isSortStatus);
    _sortFields('status', isSortStatus, arr, setArr);
}

export const sortList = (
    idButton,
    isSortName, setIsSortName,
    isSortType, setIsSortType,
    isSortSite, setIsSortSite,
    isSortStatus, setIsSortStatus,
    arr, setArr
  ) => {
      switch(idButton) {
          case 'name':
              return _sortName(arr, setArr, isSortName, setIsSortName);
          case 'type':
              return _sortType(arr, setArr, isSortType, setIsSortType);
          case 'site':
              return _sortSite(arr, setArr, isSortSite, setIsSortSite);
          case 'status':
              return _sortStatus(arr, setArr, isSortStatus, setIsSortStatus);
          default:
              return;
      }
  }