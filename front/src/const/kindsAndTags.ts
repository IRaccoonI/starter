import undefinedNull from '@/src/lib/undefinedNull';

export interface KindAndTag {
  category: string;
  tag: string;
}

export const kindAndTagNamesLocale: Record<string, string> = {
  category: 'Категория',
  tag: 'Тема',
};

const i18nTags = [
  { ru: 'Бухгалтерские услуги', en: 'accountingServices' },
  { ru: 'Грузоперевозки и транспортные услуги', en: 'cargoTransportationAndTransportServices' },
  { ru: 'Создание и продвижение сайтов', en: 'websiteCreationAndPromotion' },
  { ru: 'Юридические услуи', en: 'legalServices' },
  { ru: 'Бытовая техника', en: 'appliances' },
  { ru: 'Доставка воды', en: 'waterDelivery' },
  { ru: 'Доставка готовых блюд и продуктов', en: 'deliveryOfPreparedMealsAndProducts' },
  { ru: 'Кулинария', en: 'cooking' },
  { ru: 'Домашние животные', en: 'pets' },
  { ru: 'Канцелярские товары', en: 'stationery' },
  { ru: 'Здоровое питание', en: 'healthyEating' },
  { ru: 'Медицина', en: 'medicine' },
  { ru: 'Парфюмерия и косметика', en: 'perfumesAndCosmetics' },
  { ru: 'Покупка и аренда', en: 'buyingAndRenting' },
  { ru: 'Дополнительное образование и курсы', en: 'additionalEducationAndCourses' },
  { ru: 'Школа и вуз', en: 'schoolAndUniversity' },
  { ru: 'Одежда и обувь', en: 'clothesAndShoes' },
  { ru: 'Билеты', en: 'tickets' },
  { ru: 'Зарубежный туризм', en: 'foreignTourism' },
  { ru: 'Прокат автомобилей', en: 'carRental' },
  { ru: 'Российский туризм', en: 'russianTourism' },
  { ru: 'Подарки и цветы', en: 'giftsAndFlowers' },
  { ru: 'Работа', en: 'job' },
  { ru: 'Игры', en: 'games' },
  { ru: 'Кино', en: 'movie' },
  { ru: 'Книги', en: 'books' },
  { ru: 'Музыка', en: 'music' },
  { ru: 'Охота', en: 'hunting' },
  { ru: 'Рестораны', en: 'restaurants' },
  { ru: 'Рыбалка', en: 'fishing' },
  { ru: 'Танцы', en: 'dancing' },
  { ru: 'Театры', en: 'theaters' },
  { ru: 'Телевидение', en: 'aTelevision' },
  { ru: 'Сельскохозяйственное оборудование и техника', en: 'agriculturalEquipmentAndMachinery' },
  { ru: 'Беременность и роды', en: 'pregnancyAndChildbirth' },
  { ru: 'Свадьба', en: 'wedding' },
  { ru: 'Товары для детей', en: 'goodsForChildren' },
  { ru: 'Спорт', en: 'sport' },
  { ru: 'Дизайн интерьера', en: 'interiorDesign' },
  { ru: 'Мебель', en: 'furniture' },
  { ru: 'Ремонт', en: 'repair' },
  { ru: 'Товары для дома', en: 'householdProducts' },
  { ru: 'Доступ в интернет и мобильня связь', en: 'internetAccessAndMobileCommunications' },
  { ru: 'Авто', en: 'auto' },
  { ru: 'Мото', en: 'moto' },
  { ru: 'Банки и кредиты', en: 'banksAndLoans' },
  { ru: 'Инвестиции', en: 'investments' },
  { ru: 'Форекс', en: 'forex' },
  { ru: 'Компьютерная техника', en: 'computerTechnology' },
  { ru: 'Принтеры и МФУ', en: 'printersAndMFPs' },
  { ru: 'Смартфоны и гаджеты', en: 'smartphonesAndGadgets' },
  { ru: 'Фото, видео и аудиотехника', en: 'photoVideoAndAudioEquipment' },
  { ru: 'None', en: 'none' },
  { ru: 'Fixme', en: 'fixme' },
];

export const getTagEn = (ru: string) => i18nTags.find((tag) => tag.ru === ru)?.en ?? undefinedNull;

export const getTagRu = (en: string) => i18nTags.find((tag) => tag.en === en)?.ru ?? undefinedNull;

export const kindsAndTags: KindAndTag[] = [
  {
    category: 'None',
    tag: 'None',
  },
  {
    category: 'Fixme',
    tag: 'Fixme',
  },
  {
    category: 'Бизнес',
    tag: 'Бухгалтерские услуги',
  },
  {
    category: 'Бизнес',
    tag: 'Грузоперевозки и транспортные услуги',
  },
  {
    category: 'Бизнес',
    tag: 'Создание и продвижение сайтов',
  },
  {
    category: 'Бизнес',
    tag: 'Юридические услуи',
  },
  {
    category: 'Бытовая техника',
    tag: 'Бытовая техника',
  },
  {
    category: 'Еда и напитки',
    tag: 'Доставка воды',
  },
  {
    category: 'Еда и напитки',
    tag: 'Доставка готовых блюд и продуктов',
  },
  {
    category: 'Еда и напитки',
    tag: 'Кулинария',
  },
  {
    category: 'Животные',
    tag: 'Домашние животные',
  },
  {
    category: 'Канцелярские товары',
    tag: 'Канцелярские товары',
  },
  {
    category: 'Красота и здоровье',
    tag: 'Здоровое питание',
  },
  {
    category: 'Красота и здоровье',
    tag: 'Медицина',
  },
  {
    category: 'Красота и здоровье',
    tag: 'Парфюмерия и косметика',
  },
  {
    category: 'Недвижимость',
    tag: 'Покупка и аренда',
  },
  {
    category: 'Образование',
    tag: 'Дополнительное образование и курсы',
  },
  {
    category: 'Образование',
    tag: 'Школа и вуз',
  },
  {
    category: 'Одежда, обувь и аксессуары',
    tag: 'Одежда и обувь',
  },
  {
    category: 'Отдых и путешествия',
    tag: 'Билеты',
  },
  {
    category: 'Отдых и путешествия',
    tag: 'Зарубежный туризм',
  },
  {
    category: 'Отдых и путешествия',
    tag: 'Прокат автомобилей',
  },
  {
    category: 'Отдых и путешествия',
    tag: 'Российский туризм',
  },
  {
    category: 'Подарки и цветы',
    tag: 'Подарки и цветы',
  },
  {
    category: 'Работа',
    tag: 'Работа',
  },
  {
    category: 'Развлечения и досуг',
    tag: 'Игры',
  },
  {
    category: 'Развлечения и досуг',
    tag: 'Кино',
  },
  {
    category: 'Развлечения и досуг',
    tag: 'Книги',
  },
  {
    category: 'Развлечения и досуг',
    tag: 'Музыка',
  },
  {
    category: 'Развлечения и досуг',
    tag: 'Охота',
  },
  {
    category: 'Развлечения и досуг',
    tag: 'Рестораны',
  },
  {
    category: 'Развлечения и досуг',
    tag: 'Рыбалка',
  },
  {
    category: 'Развлечения и досуг',
    tag: 'Танцы',
  },
  {
    category: 'Развлечения и досуг',
    tag: 'Театры',
  },
  {
    category: 'Развлечения и досуг',
    tag: 'Телевидение',
  },
  {
    category: 'Сельскохозяйственное оборудование и техника',
    tag: 'Сельскохозяйственное оборудование и техника',
  },
  {
    category: 'Семья и дети',
    tag: 'Беременность и роды',
  },
  {
    category: 'Семья и дети',
    tag: 'Свадьба',
  },
  {
    category: 'Семья и дети',
    tag: 'Товары для детей',
  },
  {
    category: 'Спорт',
    tag: 'Спорт',
  },
  {
    category: 'Строительство, обустройство и ремонт',
    tag: 'Дизайн интерьера',
  },
  {
    category: 'Строительство, обустройство и ремонт',
    tag: 'Мебель',
  },
  {
    category: 'Строительство, обустройство и ремонт',
    tag: 'Ремонт',
  },
  {
    category: 'Строительство, обустройство и ремонт',
    tag: 'Товары для дома',
  },
  {
    category: 'Телеком',
    tag: 'Доступ в интернет и мобильня связь',
  },
  {
    category: 'Транспорт',
    tag: 'Авто',
  },
  {
    category: 'Транспорт',
    tag: 'Мото',
  },
  {
    category: 'Финансы',
    tag: 'Банки и кредиты',
  },
  {
    category: 'Финансы',
    tag: 'Инвестиции',
  },
  {
    category: 'Финансы',
    tag: 'Форекс',
  },
  {
    category: 'Электроника',
    tag: 'Компьютерная техника',
  },
  {
    category: 'Электроника',
    tag: 'Принтеры и МФУ',
  },
  {
    category: 'Электроника',
    tag: 'Смартфоны и гаджеты',
  },
  {
    category: 'Электроника',
    tag: 'Фото, видео и аудиотехника',
  },
];
