// Алатауский р-н
// Алмалинский р-н
// Ауэзовский р-н
// Бостандыкский р-н
// Жетысуский р-н
// Медеуский р-н
// Наурызбайский р-н
// Турксибский р-н

export interface DistrictInterface {
    district: number;
    isSelected: boolean;
    district_name: string;
    subdistricts: string[];
}

export const Alatau: DistrictInterface = {
  district: 1,
  isSelected: false,
  district_name: "Алатауский р-н",
  subdistricts: [
    "13-й микрорайон",
    "Дарабоз",
    "мкр 6-й градокомплекс",
    "мкр 71-й разъезд",
    "мкр АДК",
    "мкр Айгерим-1",
    "мкр Айгерим-2",
    "мкр Акбулак",
    "мкр Аккент",
    "мкр Алгабас",
    "мкр Байбесик",
    "мкр Боралдай (Бурундай)",
    "мкр Дархан",
    "мкр Заря Востока",
    "мкр Зердели (Алгабас-6)",
    "мкр Карасу",
    "мкр Коккайнар",
    "мкр Курылысшы",
    "мкр Мадениет",
    "мкр Нуркент (Алгабас-1)",
    "мкр Ожет",
    "мкр Рахат",
    "мкр Самгау",
    "мкр Саялы",
    "мкр Теректы",
    "мкр Томирис",
    "мкр Трудовик",
    "мкр Туркестан",
    "мкр Улжан-1",
    "мкр Улжан-2",
    "мкр Шанырак-1",
    "мкр Шанырак-2",
    "мкр Шанырак-3",
    "мкр Шанырак-4",
    "мкр Шанырак-5",
    "мкр Шанырак-6",
    ]
} 

export const Almaly: DistrictInterface = {
    district: 2,
    isSelected: false,
    district_name: "Алмалинский р-н",
    subdistricts: [
        "мкр Тастак-2",
        "мкр Тастак-3"
    ]
}

export const Auezovsk: DistrictInterface = {
    district: 3,
    isSelected: false,
    district_name: "Ауэзовский р-н",
    subdistricts: [
        "мкр Акбулак",
        "мкр Аксай-1",
        "мкр Аксай-1А",
        "мкр Аксай-2",
        "мкр Аксай-2А",
        "мкр Аксай-3",
        "мкр Аксай-3А",
        "мкр Аксай-3Б",
        "мкр Аксай-4",
        "мкр Аксай-5",
        "мкр Алмас",
        "мкр Алтын Бесик",
        "мкр Астана",
        "мкр Баянаул",
        "мкр Достык",
        "мкр Дубок (Шабыт)",
        "мкр Дубок-2",
        "мкр Жазира",
        "мкр Жетысу-1",
        "мкр Жетысу-2",
        "мкр Жетысу-3",
        "мкр Жетысу-4",
        "мкр Мамыр",
        "мкр Мамыр-1",
        "мкр Мамыр-2",
        "мкр Мамыр-3",
        "мкр Мамыр-4",
        "мкр Мамыр-7",
        "мкр Сайран",
        "мкр Тастак-1",
        "мкр Таугуль",
        "мкр Таугуль-1",
        "мкр Таугуль-2",
        "мкр Таугуль-3",
        "мкр Тепличный",
        "мкр №1",
        "мкр №10",
        "мкр №10 А",
        "мкр №11",
        "мкр №12",
        "мкр №2",
        "мкр №3",
        "мкр №4",
        "мкр №5",
        "мкр №6",
        "мкр №7",
        "мкр №8",
        "мкр №9",
    ]
}

export const Bostandyk: DistrictInterface = {
    district: 4,
    isSelected: false,
    district_name: "Бостандыкский р-н",
    subdistricts: [
        "мкр Актобе",
        "мкр Алмагуль",
        "мкр Архат",
        "мкр Баганашыл",
        "мкр Ерменсай",
        "мкр Казахфильм",
        "мкр Керемет",
        "мкр Коктем-1",
        "мкр Коктем-2",
        "мкр Коктем-3",
        "мкр Мирас",
        "мкр Нур Алатау",
        "мкр Нурлытау (Энергетик)",
        "мкр Орбита-1",
        "мкр Орбита-2",
        "мкр Орбита-3",
        "мкр Орбита-4",
        "мкр Хан Тенгри",
    ]
}


export const Zhetisu: DistrictInterface = {
    district: 5,
    isSelected: false,
    district_name: "Жетысуский р-н",
    subdistricts: [
        "мкр Айнабулак-1",
        "мкр Айнабулак-2мкр Айнабулак-3",
        "мкр Айнабулак-4",
        "мкр Дорожник",
        "мкр Кемел (Первомайское)",
        "мкр Кокжиек",
        "мкр Кулагер",
    ]
}

export const Medeu: DistrictInterface = {
    district: 6,
    isSelected: false,
    district_name: "Медеуский р-н",
    subdistricts: [
        "мкр Аккайын",
        "мкр Алатау (ИЯФ)",
        "мкр Аскартау",
        "мкр Атырау",
        "мкр Бутаковка",
        "мкр Горный Гигант",
        "мкр Думан-1",
        "мкр Думан-2",
        "мкр Каменское плато",
        "мкр Кенсай",
        "мкр Коктобе",
        "мкр Кольсай",
        "мкр Самал",
        "мкр Самал-1",
        "мкр Самал-2",
        "мкр Самал-3",
        "мкр Сулусай",
        "мкр Тау Самал",
        "мкр Юбилейный",
    ]
}

export const Nauryzbai: DistrictInterface = {
    district: 7,
    isSelected: false,
    district_name: "Наурызбайский р-н",
    subdistricts: [
        "мкр Акжар",
        "мкр Галамат",
        "мкр Дарын",
        "мкр Жайлау",
        "мкр Жайлы",
        "мкр Калкаман-1",
        "мкр Калкаман-2",
        "мкр Калкаман-3",
        "мкр Карагайлы",
        "мкр Каргалы",
        "мкр Курамыс",
        "мкр Рахат",
        "мкр Тастыбулак",
        "мкр Таужолы",
        "мкр Таусамалы",
        "мкр Шугыла",
    ]
}

export const Turksib: DistrictInterface = {
    district: 8,
    isSelected: false,
    district_name: "Турксибский р-н",
    subdistricts: [
        "мкр 13-й военный городок",
        "мкр Алтай-1",
        "мкр Алтай-2",
        "мкр Альмерек",
        "мкр Жас Канат",
        "мкр Жулдыз-1",
        "мкр Жулдыз-2",
        "мкр Кайрат",
        "мкр Маяк",
        "мкр Нуршашкан (Колхозши)",
    ]
}


export const Districts = [
    Alatau, Almaly, Auezovsk, Bostandyk, Zhetisu, Medeu, Nauryzbai, Turksib
]