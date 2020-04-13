

export default class TextService {


  constructor() {
  }


  translateInspection(array) {
    if (array) {
      array = array.map((item, i) => {
        item.inspection_description = this.swapInspectionText(item.inspection_description);
        item.inspection_type = this.swapInspectionText(item.inspection_type);
        return item;
      });
    }
  }

  swapInspectionText(value) {
      switch(value) {
        case 'NO ACTION': return 'Успешно пройдена, документы выданы';
          break;
        case 'REINSPECTION REQUIRED': return 'Нужна повторная проверка';
          break;
        case 'SHORTER DATE ADVANCE': return 'Проверка перенесена';
          break;
        case 'ISSUED PERMIT': return 'Проверку прошел, идет выдача документов';
          break;
        case 'Regular': return 'Стандартная проверка';
          break;
        case 'Opening': return 'Открытие организации';
          break;
        case 'Reinspection': return 'Повторная проверка';
          break;
        case 'Other': return 'Остальное';
          break;
        case 'Change of Ownership': return 'Смена собственника';
          break;
        case 'Complaint': return 'В связи с жалобой';
          break;
        case 'Enforcement': return 'Правоприменение';
          break;
        default: return value;
    }
  }

}
