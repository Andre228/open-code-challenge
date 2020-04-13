

export default class DropdownService {


  constructor() {
    this.columns = [

      { fieldName: 'business_name', displayName: 'Наименование организации', isVisible: true},
      { fieldName: 'business_address', displayName: 'Адрес организации', isVisible: true},
      { fieldName: 'business_city', displayName: 'Город организации', isVisible: false},
      { fieldName: 'business_phone_number', displayName: 'Номер организации', isVisible: true},
      { fieldName: 'inspection_date', displayName: 'Дата инспекции', isVisible: true},
      { fieldName: 'inspection_description', displayName: 'Статус инспекции', isVisible: false},
      { fieldName: 'inspection_type', displayName: 'Тип проведения инспекции', isVisible: false}

    ];
  }

  getAllColumns() {
     return this.columns;
  }

  isAllInvisible(arr) {
    return !arr.some(item => item.isVisible);
  }

}
