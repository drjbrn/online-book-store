class renderInputForPersonalInfo {
  id: string;
  placeholder: string;
  modifiedElem: string;

  constructor(id: string, placeholder: string, modifiedElem: string) {
    this.id = id;
    this.placeholder = placeholder;
    this.modifiedElem = modifiedElem;
  }

  render() {
    const label = document.createElement('label');
    label.classList.add('personal-info__label');
    label.setAttribute('for', this.id);

    const input = document.createElement('input');
    input.classList.add('personal-info__input', 'personal-info__input_invalid');
    input.type = 'text';
    input.id = this.id;
    input.name = this.id;
    input.placeholder = this.placeholder;
    input.required = true;

    const span = document.createElement('span');
    span.classList.add('personal-info__error', `error__${this.modifiedElem}`);

    label.append(input, span);
    return label;
  }
}

class renderCreditCard extends renderInputForPersonalInfo {
  labelText: string;
  maxLength: number;
  cssClass: string;

  constructor(
    id: string,
    placeholder: string,
    modificalElem: string,
    labelText: string,
    maxLength: number,
    cssClass: string
  ) {
    super(id, placeholder, modificalElem);
    this.labelText = labelText;
    this.maxLength = maxLength;
    this.cssClass = cssClass;
  }

  renderCard() {
    const label = document.createElement('label');
    label.classList.add('credit-card__label', this.cssClass);
    label.setAttribute('for', this.id);
    label.innerHTML = this.labelText;

    const input = document.createElement('input');
    input.classList.add('credit-card__input', 'credit-card__input_invalid');
    input.type = 'text';
    input.id = this.id;
    input.name = this.id;
    input.placeholder = this.placeholder;
    input.required = true;
    input.maxLength = this.maxLength;
    input.inputMode = 'numeric';

    const span = document.createElement('span');
    span.classList.add('credit-card__error', `error__${this.modifiedElem}`);

    label.append(input, span);
    return label;
  }
}

export class renderModal {
  render() {
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal__content');
    modalContent.innerHTML = `<i class="fa fa-times modal__close" aria-hidden="true"></i>`;

    const titleModal = document.createElement('h2');
    titleModal.classList.add('modal__title');
    titleModal.innerHTML = 'Enter Payment Information';

    const formForInfo = document.createElement('form');
    formForInfo.classList.add('modal__form');

    const personalInfo = document.createElement('div');
    personalInfo.classList.add('modal__personal-info', 'personal-info');

    const personalName = new renderInputForPersonalInfo('personal-name', 'Name', 'name');
    const personalPhone = new renderInputForPersonalInfo('personal-phone', 'Phone number', 'phone');
    const personalAddress = new renderInputForPersonalInfo('personal-address', 'Delivery address', 'address');
    const personalMail = new renderInputForPersonalInfo('personal-mail', 'E-mail', 'mail');

    personalInfo.append(personalName.render(), personalPhone.render(), personalAddress.render(), personalMail.render());

    const creditCardInfo = document.createElement('div');
    creditCardInfo.classList.add('modal__credit-card', 'credit-card');
    const logoCard = document.createElement('img');
    logoCard.src = 'https://www.pngall.com/wp-content/uploads/2/Blue-Credit-Card-PNG.png';
    logoCard.classList.add('credit-card__logo');

    const cardNumber = new renderCreditCard(
      'card-number',
      'xxxx xxxx xxxx xxxx',
      'number',
      'Card Number',
      19,
      'credit-card__number'
    );
    const cardExpiration = new renderCreditCard(
      'card-expiration',
      'xx/xx',
      'date',
      'Expiration (mm/yy)',
      5,
      'credit-card__expiration'
    );
    const cardCVV = new renderCreditCard('CVV', 'xxx', 'CVV', 'CVV', 3, 'credit-card__cvv');
    creditCardInfo.append(logoCard, cardNumber.renderCard(), cardExpiration.renderCard(), cardCVV.renderCard());

    const modalBtn = document.createElement('button');
    modalBtn.classList.add('modal__btn');
    modalBtn.type = 'submit';
    modalBtn.innerHTML = 'Confirm';

    formForInfo.append(personalInfo, creditCardInfo, modalBtn);
    modalContent.append(titleModal, formForInfo);
    modalWindow.append(modalContent);

    return modalWindow;
  }
}
