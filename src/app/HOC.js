import React from 'react';
export const stracture = {
    type: 'Start',
    variable: 'main',
    children: [
        {
            type: 'TitleItem',
            title: '1. Основание для проектирования',
            icon: '',
            variable: '',
        },
        {
            type: 'UpploadFile',
            title: '',
            icon: '',
            variable: '',
        },
        {
            type: 'TitleItem',
            title: '1.1 Перечень приоритетных проектов на 10-летний период',
            icon: '',
            variable: '',
        },
        {
            type: 'UpploadFile',
            title: '',
            icon: '',
            variable: '',
        },
        {
            type: 'TitleItem',
            title: '1.2 Перечень приоритетных проектов на 10-летний период',
            icon: '',
            variable: '',
        },
        {
            type: 'UpploadFile',
            title: '',
            icon: '',
            variable: '',
        },
        {
            type: 'TitleItem',
            title: '1.3 Перечень приоритетных проектов на 10-летний период',
            icon: '',
            variable: '',
        },
        {
            type: 'UpploadFile',
            title: '',
            icon: '',
            variable: '',
        },
        {
            type: 'TitleItem',
            title: '1.4 Перечень приоритетных проектов на 10-летний период',
            icon: '',
            variable: '',
        },
        {
            type: 'UpploadFile',
            title: '',
            icon: '',
            variable: '',
        },
        {
            type: 'TitleItem',
            title: '1.5 Перечень приоритетных проектов на 10-летний период',
            icon: '',
            variable: '',
        },
        {
            type: 'UpploadFile',
            title: '',
            icon: '',
            variable: '',
        },
        {
            type: 'TitleItem',
            title: '2. Месторасположение предприятия, здания, сооружения',
            icon: '',
            variable: '',
        },
        {
            type: 'selectItem',
            title: 'Наименование области (округа)',
            icon: '',
            variable: 'region_district',
            options: [
                {
                    label: 'ЦентрНаименование области (округа)альный федеральный округ',
                    id: 'ЦентрНаименование области (округа)альный федеральный округ',
                },
                {
                    label: 'Северо-Западный федеральный округ',
                    id: 'Северо-Западный федеральный округ',
                },
                {
                    label: 'Южный федеральный округ',
                    id: 'Южный федеральный округ',
                },
                {
                    label: 'Северо-Кавказский Федеральный округ',
                    id: 'Северо-Кавказский Федеральный округ',
                },
                {
                    label: 'Приволжский федеральный округ',
                    id: 'Приволжский федеральный округ',
                },
                {
                    label: 'Уральский федеральный округ',
                    id: 'Уральский федеральный округ',
                },
                {
                    label: 'Сибирский федеральный округ',
                    id: 'Сибирский федеральный округ',
                },
                {
                    label: 'Дальневосточный федеральный округ',
                    id: 'Дальневосточный федеральный округ',
                },
            ],
        },
        {
            type: 'selectItem',
            title: 'Центральный федеральный округ',
            icon: '',
            variable: 'capacity',
            options: [
                {
                    label: 'Центральный федеральный округ',
                    id: 'Центральный федеральный округ',
                },
                {
                    label: 'Северо-Западный федеральный округ',
                    id: 'Северо-Западный федеральный округ',
                },
                {
                    label: 'Южный федеральный округ',
                    id: 'Южный федеральный округ',
                },
                {
                    label: 'Северо-Кавказский федеральный округ',
                    id: 'Северо-Кавказский федеральный округ',
                },
                {
                    label: 'Приволжский федеральный округ',
                    id: 'Приволжский федеральный округ',
                },
                {
                    label: 'Уральский федеральный округ',
                    id: 'Уральский федеральный округ',
                },
                {
                    label: 'Сибирский федеральный округ',
                    id: 'Сибирский федеральный округ',
                },
                {
                    label: 'Дальневосточный федеральный округ',
                    id: 'Дальневосточный федеральный округ',
                },
            ],
        },
        {
            type: 'selectItem',
            title: 'Наименование района строительства',
            icon: '',
            variable: 'development_regions',
            options: [
                {
                    label: 'Алагирский',
                    id: 'Алагирский',
                },
                {
                    label: 'Ардонский',
                    id: 'Ардонский',
                },
                {
                    label: 'Дигорский',
                    id: 'Дигорский',
                },
                {
                    label: 'Ирафский',
                    id: 'Ирафский',
                },
                {
                    label: 'Кировский',
                    id: 'Кировский',
                },
                {
                    label: 'Моздокский',
                    id: 'Моздокский',
                },
                {
                    label: 'Правобережный',
                    id: 'Правобережный',
                },
                {
                    label: 'Пригородный',
                    id: 'Пригородный',
                },
            ],
        },
        {
            type: 'selectItem',
            title: 'Вид строительства',
            icon: '',
            variable: 'type_of_construction',
            options: [
                {
                    label: 'Новое строительство',
                    id: 'Новое строительство',
                },
                {
                    label: 'Техническое перевооружение',
                    id: 'Техническое перевооружение',
                },
                {
                    label: 'Реконструкция',
                    id: 'Реконструкция',
                },
                {
                    label: 'Прочее',
                    id: 'Прочее',
                },
            ],
        },
        {
            type: 'TitleItem',
            title: '3. Заказчик/Агент',
            icon: '',
            variable: '',
        },
        {
            type: 'selectItem',
            title: 'Выбрать тип',
            icon: '',
            variable: 'customer_or_agent_type',
            options: [
                {
                    label: 'Заказчик',
                    id: 'Заказчик',
                },
                {
                    label: 'Агент',
                    id: 'Агент',
                },
            ],
        },
        {
            type: 'selectItem',
            title: 'Наименование организации',
            icon: '',
            variable: 'customer_agent_organization',
            options: [
                {
                    label: 'ООО “Компания 1',
                    id: 'ООО “Компания 1”',
                },
                {
                    label: 'ООО “Компания 2”',
                    id: 'ООО “Компания 2”',
                },
                {
                    label: 'ООО “Компания 3”',
                    id: 'ООО “Компания 3”',
                },
            ],
        },
        {
            type: 'TitleItem',
            title: '4. Инвестор',
            icon: '',
            variable: '',
        },
        {
            type: 'selectItem',
            title: 'Наименование организации',
            icon: '',
            variable: 'investor_organization',
            options: [
                {
                    label: 'ООО “Компания 4”',
                    id: 'ООО “Компания 4”',
                },
                {
                    label: 'ООО “Компания 5”',
                    id: 'ООО “Компания 5”',
                },
                {
                    label: 'ООО “Компания 6”',
                    id: 'ООО “Компания 6”',
                },
            ],
        },
        {
            type: 'TitleItem',
            title: '5. Экспуатируящая компания',
            icon: '',
            variable: '',
        },
        {
            type: 'selectItem',
            title: 'Наименование организации',
            icon: '',
            variable: 'company_organization',
            options: [
                {
                    label: 'ООО “Компания 7”',
                    id: 'ООО “Компания 7”',
                },
                {
                    label: 'ООО “Компания 8”',
                    id: 'ООО “Компания 8”',
                },
                {
                    label: 'ООО “Компания 9”',
                    id: 'ООО “Компания 9”',
                },
            ],
        },
        {
            type: 'TitleItem',
            title: '6. Генеральная проектная организация',
            icon: '',
            variable: '',
        },
        {
            type: 'selectItem',
            title: 'Выбрать тип',
            icon: '',
            variable: 'organization_type',
            options: [
                {
                    label: 'Определяется на конкурентной основе',
                    id: 'Определяется на конкурентной основе',
                },
                {
                    label: 'Организация выбрана',
                    id: 'Организация выбрана',
                },
            ],
        },
        {
            type: 'selectItem',
            title: 'Наименование организации',
            icon: '',
            variable: 'project_organization',
            options: [
                {
                    label: 'ООО “Компания 10”',
                    id: 'ООО “Компания 10”',
                },
                {
                    label: 'ООО “Компания 11”',
                    id: 'ООО “Компания 11”',
                },
                {
                    label: 'ООО “Компания 12”',
                    id: 'ООО “Компания 12”',
                },
            ],
        },
        {
            type: 'TitleItem',
            title: '7. Субподрядные проектные организации',
            icon: '',
            variable: '',
        },
        {
            type: 'selectItem',
            title: 'Субподрядные организации разрабатывают',
            icon: '',
            variable: 'capacity',
            options: [
                {
                    label: 'разделы проектной документации',
                    id: 'разделы проектной документации',
                },
                {
                    label: 'разделы проектной и основных комплектов рабочей документации',
                    id: 'разделы проектной и основных комплектов рабочей документации',
                },
            ],
        },
        {
            type: 'TitleItem',
            title: '11. Исходные данные',
            icon: '',
            variable: '',
        },
    ],
};

//-----------------------------------------------------------------old stracture
export const _stracture = {
    type: 'Start',
    variable: 'types_jobs',
    children: [
        {
            type: 'stepItem',
            title: 'Виды работ',
            icon: 1,
            variable: 'types_jobs',
            child: [],
            children: [
                {
                    type: 'collapseItem',
                    title: 'Общие характеристики проекта',
                    icon: 'icon-development',
                    variable: 'project_characteristics',
                    children: [
                        {
                            type: 'selectItem',
                            title: 'Вид строительства',
                            icon: '',
                            variable: 'construction_type',
                            options: 'construction_types',
                        },
                        {
                            type: 'selectItem',
                            title: 'Тип разработки',
                            icon: '',
                            variable: 'development_type',
                            options: 'development_types',
                        },
                        {
                            type: 'selectItem',
                            title: 'Направление проектирования',
                            icon: '',
                            variable: 'design_direction',
                            options: 'design_directions',
                        },
                    ],
                },
                {
                    type: 'collapseItem',
                    title: 'Сбор исходных данных',
                    icon: 'icon-download',
                    variable: 'collection_initial_data',
                    children: [
                        {
                            type: 'stageItem',
                            title: 'СИД 1 этап',
                            icon: '',
                            variable: 'idc_one',
                            children: [
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ собственными силамих',
                                    icon: '',
                                    variable: 'in_house_percentage',
                                },
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ субподряд',
                                    icon: '',
                                    variable: 'subcontracting_percentage',
                                },
                                {
                                    type: 'checkboxItem',
                                    title: 'Объект располагается на территории Южного федерального округа',
                                    icon: '',
                                    variable: 'is_southern_federal_district',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество Федеральных образований',
                                    icon: '',
                                    variable: 'federal_entities',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество Субъектов Федерации',
                                    icon: '',
                                    variable: 'federal_subjects',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество Муниципальных образований',
                                    icon: '',
                                    variable: 'municipalities',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество кадастровых планов территории',
                                    icon: '',
                                    variable: 'cadastral_plan',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество сельских и городских поселений',
                                    icon: '',
                                    variable: 'settlements',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество подключений',
                                    icon: '',
                                    variable: 'connections',
                                },
                            ],
                        },
                        {
                            type: 'stageItem',
                            title: 'СИД 2 этап',
                            icon: '',
                            variable: 'idc_two',
                            children: [
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ собственными силамих',
                                    icon: '',
                                    variable: 'in_house_percentage',
                                },
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ субподряд',
                                    icon: '',
                                    variable: 'subcontracting_percentage',
                                },
                                {
                                    type: 'checkboxItem',
                                    title: 'Объект располагается на территории Южного федерального округа',
                                    icon: '',
                                    variable: 'is_southern_federal_district',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество Федеральных образований',
                                    icon: '',
                                    variable: 'federal_entities',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество Субъектов Федерации',
                                    icon: '',
                                    variable: 'federal_subjects',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество Муниципальных образований',
                                    icon: '',
                                    variable: 'municipalities',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество кадастровых планов территории',
                                    icon: '',
                                    variable: 'cadastral_plan',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество сельских и городских поселений',
                                    icon: '',
                                    variable: 'settlements',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Объект располагается на территории Южного федерального округа',
                                    icon: '',
                                    variable: 'is_southern_federal_district',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество подключений',
                                    icon: '',
                                    variable: 'connections',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество ЗОУИТ',
                                    icon: '',
                                    variable: 'ZOUIT_quantity',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество чертежей в томе 2',
                                    icon: '',
                                    variable: 'plot_volume_two',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество чертежей в томе 4',
                                    icon: '',
                                    variable: 'plot_volume_four',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество чертежей в томе 6',
                                    icon: '',
                                    variable: 'plot_volume_six',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество чертежей в томе 7',
                                    icon: '',
                                    variable: 'plot_volume_seven',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество проектов ДПТ',
                                    icon: '',
                                    variable: 'territory_projects',
                                },
                            ],
                        },
                        {
                            type: 'stageItem',
                            title: 'СИД 2 этап. Логистическое обеспечение',
                            icon: '',
                            variable: 'LED_stage_2_Logistics',
                            children: [
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ собственными силамих',
                                    icon: '',
                                    variable: 'in_house_percentage',
                                },
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ субподряд',
                                    icon: '',
                                    variable: 'subcontracting_percentage',
                                },
                                {
                                    type: 'checkboxItem',
                                    title: 'Объект располагается на территории Южного федерального округа',
                                    icon: '',
                                    variable: 'is_southern_federal_district',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество Федеральных образований',
                                    icon: '',
                                    variable: 'federal_entities',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество Субъектов Федерации',
                                    icon: '',
                                    variable: 'federal_subjects',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество Муниципальных образований',
                                    icon: '',
                                    variable: 'municipalities',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество кадастровых планов территории',
                                    icon: '',
                                    variable: 'cadastral_plan',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество сельских и городских поселений',
                                    icon: '',
                                    variable: 'settlements',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Объект располагается на территории Южного федерального округа',
                                    icon: '',
                                    variable: 'is_southern_federal_district',
                                },
                            ],
                        },
                        {
                            type: 'stageItem',
                            title: 'СИД 3 этап',
                            icon: '',
                            variable: 'LED_3_stage',
                            children: [
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ собственными силамих',
                                    icon: '',
                                    variable: 'in_house_percentage',
                                },
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ субподряд',
                                    icon: '',
                                    variable: 'subcontracting_percentage',
                                },
                                {
                                    type: 'checkboxItem',
                                    title: 'Объект располагается на территории Южного федерального округа',
                                    icon: '',
                                    variable: 'is_southern_federal_district',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество Федеральных образований',
                                    icon: '',
                                    variable: 'federal_entities',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество Субъектов Федерации',
                                    icon: '',
                                    variable: 'federal_subjects',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество Муниципальных образований',
                                    icon: '',
                                    variable: 'municipalities',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество кадастровых планов территории',
                                    icon: '',
                                    variable: 'cadastral_plan',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество сельских и городских поселений',
                                    icon: '',
                                    variable: 'settlements',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Объект располагается на территории Южного федерального округа',
                                    icon: '',
                                    variable: 'is_southern_federal_district',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество подключений',
                                    icon: '',
                                    variable: 'connections',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество ЗОУИТ',
                                    icon: '',
                                    variable: 'ZOUIT_quantity',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество чертежей в томе 2',
                                    icon: '',
                                    variable: 'plot_volume_two',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество чертежей в томе 4',
                                    icon: '',
                                    variable: 'plot_volume_four',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество чертежей в томе 6',
                                    icon: '',
                                    variable: 'plot_volume_six',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество чертежей в томе 7',
                                    icon: '',
                                    variable: 'plot_volume_seven',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество проектов ДПТ',
                                    icon: '',
                                    variable: 'territory_projects',
                                },
                            ],
                        },
                        {
                            type: 'stageItem',
                            title: 'Оформление прав на земельные участки',
                            icon: '',
                            variable: 'land_rights_registration',
                            children: [
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ собственными силамих',
                                    icon: '',
                                    variable: 'in_house_percentage',
                                },
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ субподряд',
                                    icon: '',
                                    variable: 'subcontracting_percentage',
                                },
                                {
                                    type: 'checkboxItem',
                                    title: 'Объект располагается на территории Южного федерального округа',
                                    icon: '',
                                    variable: 'is_southern_federal_district',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество Субъектов Федерации',
                                    icon: '',
                                    variable: 'federal_subjects',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество Муниципальных образований',
                                    icon: '',
                                    variable: 'municipalities',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Площадь ',
                                    icon: '',
                                    variable: 'area',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество участков',
                                    icon: '',
                                    variable: 'land_plots_count',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество участков на землях ГЛФ',
                                    icon: '',
                                    variable: 'sff_land_plots_count',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество землепользователей',
                                    icon: '',
                                    variable: 'land_users',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Площадь на землях ГЛФ',
                                    icon: '',
                                    variable: 'sff_lands_area',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Протяженность',
                                    icon: '',
                                    variable: 'length',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Протяженность по землям ГЛФ',
                                    icon: '',
                                    variable: 'sff_lands_length',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Количество вариантов разрабатываемых по отдельным заданиям',
                                    icon: '',
                                    variable: 'variants_per_task',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'collapseItem',
                    title: 'Инженерные изыскания',
                    icon: 'icon-search',
                    variable: 'engineeringSurvey',
                    child: [],
                    children: [
                        {
                            type: 'stageItem',
                            title: 'Инженерно-геодезические изыскания',
                            icon: '',
                            variable: 'geodetic',
                            children: [
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ собственными силамих',
                                    icon: '',
                                    variable: 'in_house_percentage',
                                    child: [],
                                    children: [],
                                },
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ субподряд',
                                    icon: '',
                                    variable: 'subcontracting_percentage',
                                },
                                {
                                    type: 'checkboxItem',
                                    title: 'Объект располагается на территории Южного федерального округа',
                                    icon: '',
                                    variable: 'is_southern_federal_district',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Протяженность трассы изысканий для линейных объектов',
                                    icon: '',
                                    variable: 'survey_lines_length',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Закладка ПОГС ',
                                    icon: '',
                                    variable: 'pogc_laying',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Определение ПОГС',
                                    icon: '',
                                    variable: 'pogc_definition',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Трассирование',
                                    icon: '',
                                    variable: 'tracing',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Инженерно-топографическая съемка М 1:500 ',
                                    icon: '',
                                    variable: 'ets_m_500',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Инженерно-топографическая съемка М 1:1000',
                                    icon: '',
                                    variable: 'ets_m_1000',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Инженерно-топографическая съемка М 1:2000 ',
                                    icon: '',
                                    variable: 'ets_m_2000',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Инженерно-топографическая съемка М 1:5000',
                                    icon: '',
                                    variable: 'ets_m_5000',
                                },
                            ],
                        },
                        {
                            type: 'stageItem',
                            title: 'Инженерно-геологические изыскания',
                            icon: '',
                            variable: 'geological',
                            children: [
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ собственными силамих',
                                    icon: '',
                                    variable: 'in_house_percentage',
                                },
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ субподряд',
                                    icon: '',
                                    variable: 'subcontracting_percentage',
                                },
                                {
                                    type: 'checkboxItem',
                                    title: 'Объект располагается на территории Южного федерального округа',
                                    icon: '',
                                    variable: 'is_southern_federal_district',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Протяженность трассы изысканий для линейных объектов',
                                    icon: '',
                                    variable: 'survey_lines_length',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Инженерно-геологическая рекогносцировка',
                                    icon: '',
                                    variable: 'eg_reconnaissance',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Проходка горных выработок',
                                    icon: '',
                                    variable: 'mining',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Испытание грунтов на срез в горных выработках',
                                    icon: '',
                                    variable: 'shear_testing_of_soils',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Испытания грунтов вертикальной статической нагрузкой на штампы',
                                    icon: '',
                                    variable: 'vertical_static_load_tests',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Проведение полевых испытаний крыльчаткой сдвигомером',
                                    icon: '',
                                    variable: 'vane_shear_gauge_testing',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Статическое зондирование грунтов',
                                    icon: '',
                                    variable: 'static_sounding',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Динамическое зондирование грунтов',
                                    icon: '',
                                    variable: 'dynamic_sounding',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Лабораторные работы',
                                    icon: '',
                                    variable: 'laboratory',
                                },
                            ],
                        },
                        {
                            type: 'stageItem',
                            title: 'Инженерно-геофизические изыскания',
                            icon: '',
                            variable: 'geophysical',
                            children: [
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ собственными силамих',
                                    icon: '',
                                    variable: 'in_house_percentage',
                                },
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ субподряд',
                                    icon: '',
                                    variable: 'subcontracting_percentage',
                                },
                                {
                                    type: 'checkboxItem',
                                    title: 'Объект располагается на территории Южного федерального округа',
                                    icon: '',
                                    variable: 'is_southern_federal_district',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Протяженность трассы изысканий для линейных объектов',
                                    icon: '',
                                    variable: 'survey_lines_length',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Определение УЭС и КА',
                                    icon: '',
                                    variable: 'resistivity_and_ka',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Сейсморазведка МПВ',
                                    icon: '',
                                    variable: 'seismic_exploration',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Электроразведка ВЭЗ до глубины 200 м',
                                    icon: '',
                                    variable: 'ves_exploration_lt_200',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Электроразведка ЕП',
                                    icon: '',
                                    variable: 'electrical_prospecting_ep',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Регистрация фона высокочастотных микросейсм (3 компоненты) ',
                                    icon: '',
                                    variable: 'hf_microseisms_registration',
                                },
                            ],
                        },
                        {
                            type: 'stageItem',
                            title: 'Инженерно-экологические изыскания',
                            icon: '',
                            variable: 'ecological',
                            children: [
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ собственными силамих',
                                    icon: '',
                                    variable: 'in_house_percentage',
                                },
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ субподряд',
                                    icon: '',
                                    variable: 'subcontracting_percentage',
                                },
                                {
                                    type: 'checkboxItem',
                                    title: 'Объект располагается на территории Южного федерального округа',
                                    icon: '',
                                    variable: 'is_southern_federal_district',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Протяженность трассы изысканий для линейных объектов',
                                    icon: '',
                                    variable: 'survey_lines_length',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Лабораторные работы',
                                    icon: '',
                                    variable: 'laboratories',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Комплексное инженерно-экологическое маршрутное обследование линейных объектов ',
                                    icon: '',
                                    variable: 'linear_facilities_inspection',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Комплексное инженерно-экологическое маршрутное обследование площадочных объектов ',
                                    icon: '',
                                    variable: 'site_facilities_inspection',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Детальные наблюдения на площадках комплексных описаний ландшафтов (ПКОЛ)',
                                    icon: '',
                                    variable: 'pkol_observations',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Определение плотности потока радона',
                                    icon: '',
                                    variable: 'radon_flux_density',
                                },
                            ],
                        },
                        {
                            type: 'stageItem',
                            title: 'Инженерно-гидрометеорологические изыскания',
                            icon: '',
                            variable: 'hydrometeorological',
                            child: [],
                            children: [
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ собственными силамих',
                                    icon: '',
                                    variable: 'in_house_percentage',
                                },
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ субподряд',
                                    icon: '',
                                    variable: 'subcontracting_percentage',
                                },
                                {
                                    type: 'checkboxItem',
                                    title: 'Объект располагается на территории Южного федерального округа',
                                    icon: '',
                                    variable: 'is_southern_federal_district',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Протяженность трассы изысканий для линейных объектов',
                                    icon: '',
                                    variable: 'survey_lines_length',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Рекогносцировочное обследование ',
                                    icon: '',
                                    variable: 'reconnaissance_survey',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Переход временного водотока, лощины или пади',
                                    icon: '',
                                    variable: 'temporary_stream_transition',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Переход/подход постоянного водотока',
                                    icon: '',
                                    variable: 'permanent_stream_transition',
                                },
                            ],
                        },
                        {
                            type: 'stageItem',
                            title: 'Обследование на территории на предмет наличия ВОП',
                            icon: '',
                            variable: 'explosive_objects_presence',
                            child: [],
                            children: [
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ собственными силамих',
                                    icon: '',
                                    variable: 'in_house_percentage',
                                },
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ субподряд',
                                    icon: '',
                                    variable: 'subcontracting_percentage',
                                },
                                {
                                    type: 'checkboxItem',
                                    title: 'Объект располагается на территории Южного федерального округа',
                                    icon: '',
                                    variable: 'is_southern_federal_district',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Рекогносцировочное обследование',
                                    icon: '',
                                    variable: 'reconnaissance_survey',
                                },
                            ],
                        },
                        {
                            type: 'stageItem',
                            title: 'Археологические исследования',
                            icon: '',
                            variable: 'archaeological',
                            child: [],
                            children: [
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ собственными силамих',
                                    icon: '',
                                    variable: 'in_house_percentage',
                                },
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ субподряд',
                                    icon: '',
                                    variable: 'subcontracting_percentage',
                                },
                                {
                                    type: 'checkboxItem',
                                    title: 'Объект располагается на территории Южного федерального округа',
                                    icon: '',
                                    variable: 'is_southern_federal_district',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Рекогносцировочное обследование',
                                    icon: '',
                                    variable: 'reconnaissance_survey',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'collapseItem',
                    title: 'Проектная документация',
                    icon: 'icon-project-document',
                    variable: 'project_documentation',
                    child: [],
                    children: [
                        {
                            type: 'percentItem',
                            title: '% выполнения работ собственными силамих',
                            icon: '',
                            variable: 'in_house_percentage',
                        },
                        {
                            type: 'percentItem',
                            title: '% выполнения работ субподряд',
                            icon: '',
                            variable: 'subcontracting_percentage',
                        },
                        {
                            type: 'checkboxItem',
                            title: 'Объект располагается на территории Южного федерального округа',
                            icon: '',
                            variable: 'is_southern_federal_district',
                        },
                        {
                            type: 'numberItem',
                            title: 'Протяженность линейной части',
                            icon: '',
                            variable: 'length_linear_part',
                        },
                        {
                            type: 'numberItem',
                            title: 'Количество ГПА',
                            icon: '',
                            variable: 'number_GPU',
                        },
                        {
                            type: 'numberItem',
                            title: 'Единичная мощность мощность',
                            icon: '',
                            variable: 'unit_power_power',
                        },
                        {
                            type: 'numberItem',
                            title: 'Количество ЛПУ МГ',
                            icon: '',
                            variable: 'mumber_medical_facilities_MG',
                        },
                    ],
                },
                {
                    type: 'collapseItem',
                    title: 'Рабочая документация',
                    icon: 'icon-pen-documnet',
                    variable: '',
                    child: [],
                    children: [
                        {
                            type: 'percentItem',
                            title: '% выполнения работ собственными силамих',
                            icon: '',
                            variable: 'in_house_percentage',
                        },
                        {
                            type: 'percentItem',
                            title: '% выполнения работ субподряд',
                            icon: '',
                            variable: 'subcontracting_percentage',
                        },
                        {
                            type: 'checkboxItem',
                            title: 'Объект располагается на территории Южного федерального округа',
                            icon: '',
                            variable: 'is_southern_federal_district',
                        },
                        {
                            type: 'numberItem',
                            title: 'Протяженность линейной части',
                            icon: '',
                            variable: 'length_linear_part',
                        },
                        {
                            type: 'numberItem',
                            title: 'Количество ГПА',
                            icon: '',
                            variable: 'number_GPU',
                        },
                        {
                            type: 'numberItem',
                            title: 'Единичная мощность мощность',
                            icon: '',
                            variable: 'unit_power_power',
                        },
                        {
                            type: 'numberItem',
                            title: 'Количество ЛПУ МГ',
                            icon: '',
                            variable: 'mumber_medical_facilities_MG',
                        },
                    ],
                },
                {
                    type: 'collapseItem',
                    title: 'Разработка ТЧДЗ',
                    icon: 'icon-settings',
                    variable: 'development_PTSD',
                    child: [],
                    children: [
                        {
                            type: 'checkboxItem',
                            title: 'Да',
                            icon: '',
                            variable: 'yes',
                        },
                        {
                            type: 'checkboxItem',
                            title: 'Нет',
                            icon: '',
                            variable: 'no',
                        },
                    ],
                },
                {
                    type: 'collapseItem',
                    title: 'Разработка ОТР (вне комплекса)',
                    icon: 'icon-development',
                    variable: 'OTR_development',
                    child: [],
                    children: [
                        {
                            type: 'checkboxItem',
                            title: 'Да',
                            icon: '',
                            variable: 'yes',
                        },
                        {
                            type: 'checkboxItem',
                            title: 'Нет',
                            icon: '',
                            variable: 'no',
                        },
                    ],
                },
            ],
        },
        {
            type: 'stepItemTree',
            title: 'Дерево объектов',
            icon: 2,
            variable: 'objects',
            child: null,
            children: [
                {
                    type: 'objectName',
                    title: 'Дерево объектов',
                    icon: '2',
                    variable: 'name',
                },
                {
                    type: 'collapseItem',
                    title: 'Технические характеристики',
                    icon: 'icon-characteristics',
                    variable: 'specifications',
                    children: [
                        {
                            type: 'ListWithAddAndRemove',
                            title: 'Добавить новую характеристику',
                            icon: '2',
                            variable: '',
                            child: {
                                type: 'SelectWithValue',
                                title: 'Дерево объектов',
                                icon: '2',
                                variable: '',
                            },
                        },
                    ],
                },
                {
                    type: 'ButtonForAdd',
                    title: 'Добавить особые условия проектирования',
                    subTitle: 'Особые условия',
                    icon: '2',
                    variable: '',
                    child: {
                        type: 'collapseItem',
                        title: 'Сбор исходных данных',
                        icon: 'icon-download',
                        variable: '',
                        child: [],
                        children: [
                            {
                                type: 'stageItem',
                                title: 'СИД 1 этап',
                                icon: '',
                                variable: 'idc_one',
                                child: [],
                                children: [
                                    {
                                        type: 'percentItem',
                                        title: '% выполнения работ собственными силамих',
                                        icon: '',
                                        variable: 'in_house_percentage',
                                    },
                                    {
                                        type: 'percentItem',
                                        title: '% выполнения работ субподряд',
                                        icon: '',
                                        variable: 'subcontracting_percentage',
                                    },
                                    {
                                        type: 'checkboxItem',
                                        title: 'Объект располагается на территории Южного федерального округа',
                                        icon: '',
                                        variable:
                                            'is_southern_federal_district',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество Федеральных образований',
                                        icon: '',
                                        variable: 'federal_entities',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество Субъектов Федерации',
                                        icon: '',
                                        variable: 'federal_subjects',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество Муниципальных образований',
                                        icon: '',
                                        variable: 'municipalities',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество кадастровых планов территории',
                                        icon: '',
                                        variable: 'cadastral_plan',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество сельских и городских поселений',
                                        icon: '',
                                        variable: 'settlements',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Объект располагается на территории Южного федерального округа',
                                        icon: '',
                                        variable:
                                            'is_southern_federal_district',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество подключений',
                                        icon: '',
                                        variable: 'connections',
                                    },
                                ],
                            },
                            {
                                type: 'stageItem',
                                title: 'СИД 2 этап',
                                icon: '',
                                variable: 'idc_two',
                                child: [],
                                children: [
                                    {
                                        type: 'percentItem',
                                        title: '% выполнения работ собственными силамих',
                                        icon: '',
                                        variable: 'in_house_percentage',
                                    },
                                    {
                                        type: 'percentItem',
                                        title: '% выполнения работ субподряд',
                                        icon: '',
                                        variable: 'subcontracting_percentage',
                                    },
                                    {
                                        type: 'checkboxItem',
                                        title: 'Объект располагается на территории Южного федерального округа',
                                        icon: '',
                                        variable:
                                            'is_southern_federal_district',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество Федеральных образований',
                                        icon: '',
                                        variable: 'federal_entities',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество Субъектов Федерации',
                                        icon: '',
                                        variable: 'federal_subjects',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество Муниципальных образований',
                                        icon: '',
                                        variable: 'municipalities',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество кадастровых планов территории',
                                        icon: '',
                                        variable: 'cadastral_plan',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество сельских и городских поселений',
                                        icon: '',
                                        variable: 'settlements',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Объект располагается на территории Южного федерального округа',
                                        icon: '',
                                        variable:
                                            'is_southern_federal_district',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество подключений',
                                        icon: '',
                                        variable: 'connections',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество ЗОУИТ',
                                        icon: '',
                                        variable: 'ZOUIT_quantity',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество чертежей в томе 2',
                                        icon: '',
                                        variable: 'plot_volume_two',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество чертежей в томе 4',
                                        icon: '',
                                        variable: 'plot_volume_four',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество чертежей в томе 6',
                                        icon: '',
                                        variable: 'plot_volume_six',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество чертежей в томе 7',
                                        icon: '',
                                        variable: 'plot_volume_seven',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество проектов ДПТ',
                                        icon: '',
                                        variable: 'territory_projects',
                                    },
                                ],
                            },
                            {
                                type: 'stageItem',
                                title: 'СИД 2 этап. Логистическое обеспечение',
                                icon: '',
                                variable: 'idc_two_logistics',
                                child: [],
                                children: [
                                    {
                                        type: 'percentItem',
                                        title: '% выполнения работ собственными силамих',
                                        icon: '',
                                        variable: 'in_house_percentage',
                                    },
                                    {
                                        type: 'percentItem',
                                        title: '% выполнения работ субподряд',
                                        icon: '',
                                        variable: 'subcontracting_percentage',
                                    },
                                    {
                                        type: 'checkboxItem',
                                        title: 'Объект располагается на территории Южного федерального округа',
                                        icon: '',
                                        variable:
                                            'is_southern_federal_district',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество Федеральных образований',
                                        icon: '',
                                        variable: 'federal_entities',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество Субъектов Федерации',
                                        icon: '',
                                        variable: 'federal_subjects',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество Муниципальных образований',
                                        icon: '',
                                        variable: 'municipalities',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество кадастровых планов территории',
                                        icon: '',
                                        variable: 'cadastral_plan',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество сельских и городских поселений',
                                        icon: '',
                                        variable: 'settlements',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Объект располагается на территории Южного федерального округа',
                                        icon: '',
                                        variable:
                                            'is_southern_federal_district',
                                    },
                                ],
                            },
                            {
                                type: 'stageItem',
                                title: 'СИД 3 этап',
                                icon: '',
                                variable: 'idc_three',
                                child: [],
                                children: [
                                    {
                                        type: 'percentItem',
                                        title: '% выполнения работ собственными силамих',
                                        icon: '',
                                        variable: 'in_house_percentage',
                                    },
                                    {
                                        type: 'percentItem',
                                        title: '% выполнения работ субподряд',
                                        icon: '',
                                        variable: 'subcontracting_percentage',
                                    },
                                    {
                                        type: 'checkboxItem',
                                        title: 'Объект располагается на территории Южного федерального округа',
                                        icon: '',
                                        variable:
                                            'is_southern_federal_district',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество Федеральных образований',
                                        icon: '',
                                        variable: 'federal_entities',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество Субъектов Федерации',
                                        icon: '',
                                        variable: 'federal_subjects',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество Муниципальных образований',
                                        icon: '',
                                        variable: 'municipalities',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество кадастровых планов территории',
                                        icon: '',
                                        variable: 'cadastral_plan',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество сельских и городских поселений',
                                        icon: '',
                                        variable: 'settlements',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Объект располагается на территории Южного федерального округа',
                                        icon: '',
                                        variable:
                                            'is_southern_federal_district',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество подключений',
                                        icon: '',
                                        variable: 'connections',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество ЗОУИТ',
                                        icon: '',
                                        variable: 'ZOUIT_quantity',
                                        child: [],
                                        children: [],
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество чертежей в томе 2',
                                        icon: '',
                                        variable: 'plot_volume_two',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество чертежей в томе 4',
                                        icon: '',
                                        variable: 'plot_volume_four',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество чертежей в томе 6',
                                        icon: '',
                                        variable: 'plot_volume_six',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество чертежей в томе 7',
                                        icon: '',
                                        variable: 'plot_volume_seven',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество проектов ДПТ',
                                        icon: '',
                                        variable: 'territory_projects',
                                    },
                                ],
                            },
                            {
                                type: 'stageItem',
                                title: 'Оформление прав на земельные участки',
                                icon: '',
                                variable: 'land_rights_registration',
                                child: [],
                                children: [
                                    {
                                        type: 'percentItem',
                                        title: '% выполнения работ собственными силамих',
                                        icon: '',
                                        variable: 'in_house_percentage',
                                    },
                                    {
                                        type: 'percentItem',
                                        title: '% выполнения работ субподряд',
                                        icon: '',
                                        variable: 'subcontracting_percentage',
                                    },
                                    {
                                        type: 'checkboxItem',
                                        title: 'Объект располагается на территории Южного федерального округа',
                                        icon: '',
                                        variable:
                                            'is_southern_federal_district',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество Субъектов Федерации',
                                        icon: '',
                                        variable: 'federal_subjects',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество Муниципальных образований',
                                        icon: '',
                                        variable: 'municipalities',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Площадь ',
                                        icon: '',
                                        variable: 'area',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество участков',
                                        icon: '',
                                        variable: 'land_plots_count',
                                        child: [],
                                        children: [],
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество участков на землях ГЛФ',
                                        icon: '',
                                        variable: 'sff_land_plots_count',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество землепользователей',
                                        icon: '',
                                        variable: 'land_users',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Площадь на землях ГЛФ',
                                        icon: '',
                                        variable: 'sff_lands_area',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Протяженность',
                                        icon: '',
                                        variable: 'length',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Протяженность по землям ГЛФ',
                                        icon: '',
                                        variable: 'sff_lands_length',
                                    },
                                    {
                                        type: 'numberItem',
                                        title: 'Количество вариантов разрабатываемых по отдельным заданиям',
                                        icon: '',
                                        variable: 'variants_per_task',
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        // {
        //     type: "stepItem",
        //     title: "Уточненная стоимость (коэффициенты)",
        //     icon: 3,
        //     variable: "",
        //     children: [
        //         {
        //             type: "TitleItem",
        //             title: "Коэффициенты",
        //             icon: "",
        //             variable: ""
        //         },
        //         {
        //             type: "numberItem",
        //             title: "Коэффициент корректировки ПД/РД ОКС",
        //             icon: "",
        //             variable: ""
        //         },
        //         {
        //             type: "numberItem",
        //             title: "Коэффициент региона проектирования",
        //             icon: "",
        //             variable: "",
        //             child: [],
        //             children: []
        //         },
        //         {
        //             type: "numberItem",
        //             title: "Коэффициент усложняющих факторов",
        //             icon: "",
        //             variable: "",
        //             child: [],
        //             children: []
        //         },
        //         {
        //             type: "numberItem",
        //             title: "Коэффициент стоимости субподрядных работ",
        //             icon: "",
        //             variable: "",
        //             child: [],
        //             children: []
        //         },
        //     ]
        // },
        {
            type: 'stepItem',
            title: 'Дополнительные работы',
            icon: 3,
            variable: 'additionalWork',
            children: [
                {
                    type: 'ListWithAddAndRemove',
                    title: 'Вид работ',
                    icon: '',
                    variable: 'typeWork',
                    child: {
                        type: 'selectItemWithColleps',
                        title: 'Вид работ',
                        icon: '',
                        options: 'type_work',
                        variable: 'typeWork',
                        child: {
                            1: [
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ собственными силамих',
                                    icon: '',
                                    variable: 'performing_work_their_own',
                                },
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ субподряд',
                                    icon: '',
                                    variable: 'subcontracting_percentage',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Производительность',
                                    icon: '',
                                    variable: 'Performance',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Инфраструктура',
                                    icon: '',
                                    variable: 'infrastructure',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Прочее',
                                    icon: '',
                                    variable: 'other',
                                },
                            ],
                            2: [
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ собственными силамих',
                                    icon: '',
                                    variable: 'performing_work_their_own',
                                },
                                {
                                    type: 'percentItem',
                                    title: '% выполнения работ субподряд',
                                    icon: '',
                                    variable: 'subcontracting_percentage',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Производительность',
                                    icon: '',
                                    variable: 'performance',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Инфраструктура',
                                    icon: '',
                                    variable: 'infrastructure',
                                },
                                {
                                    type: 'numberItem',
                                    title: 'Прочее',
                                    icon: '',
                                    variable: 'other',
                                },
                            ],
                        },
                    },
                },
            ],
        },
    ],
};

export const objectTypes = [
    {
        label: 'Дожимная компрессорная станция (ДКС)',
        id: 'Дожимная компрессорная станция (ДКС)',
        children: [
            {
                type: 'checkboxItemGroup',
                title: '',
                icon: '',
                variable: 'structures',
                children: [
                    {
                        title: 'Ремонтно-механическая мастерская, Административно-бытовой корпус, Служебно-эксплуатационный блок, Производственно-эксплуатационный блок',
                        id: 'Ремонтно-механическая мастерская, Административно-бытовой корпус, Служебно-эксплуатационный блок, Производственно-эксплуатационный блок',
                    },
                    {
                        title: 'Котельная',
                        id: 'Котельная',
                    },
                    {
                        title: 'Механизированная мойка',
                        id: 'Механизированная мойка',
                    },
                    {
                        title: 'Канализационные очистные сооружения, водоочистные сооружения',
                        id: 'Канализационные очистные сооружения, водоочистные сооружения',
                    },
                    {
                        title: 'Закрытые одноэтажные стоянки автотранспорта площадью до 1500 м2.',
                        id: 'Закрытые одноэтажные стоянки автотранспорта площадью до 1500 м2.',
                    },
                ],
            },
            {
                type: 'selectItem',
                title: 'Вид агрегатов',
                icon: '',
                variable: 'aggregators',
                options: [
                    {
                        label: '1 агрегат',
                        id: '1 агрегат',
                    },
                    {
                        label: '2 агрегата',
                        id: '2 агрегата',
                    },
                    {
                        label: '3 агрегата',
                        id: '3 агрегата',
                    },
                    {
                        label: '4 агрегата',
                        id: '4 агрегата',
                    },
                    {
                        label: '5 агрегатов',
                        id: '5 агрегатов',
                    },
                    {
                        label: '6 агрегатов',
                        id: '6 агрегатов',
                    },
                    {
                        label: '7 агрегатов',
                        id: '7 агрегатов',
                    },
                    {
                        label: '8 агрегатов',
                        id: '8 агрегатов',
                    },
                    //, 2 агрегата, 3 агрегата, 4 агрегата, 5 агрегатов, 6 агрегатов, 7 агрегатов,
                ],
            },
        ],
    },
    {
        label: 'Компрессорная станция (КС)',
        id: 'Компрессорная станция (КС)',
        children: [
            {
                type: 'selectItem',
                title: 'Вид',
                icon: '',
                variable: 'capacity',
                options: [
                    {
                        label: '4х16 установленной мощностью, МВт и газотурбинным приводом',
                        id: '4х16 установленной мощностью, МВт и газотурбинным приводом',
                    },
                    {
                        label: '4х25 установленной мощностью, МВт и газотурбинным приводом',
                        id: '4х25 установленной мощностью, МВт и газотурбинным приводом',
                    },
                    {
                        label: '4х32 установленной мощностью, МВт и газотурбинным приводом',
                        id: '4х32 установленной мощностью, МВт и газотурбинным приводом',
                    },
                ],
            },
        ],
    },
    {
        label: 'Газораспределительная станция (ГРС) тех характеристики:',
        id: 'Газораспределительная станция (ГРС) тех характеристики:',
        children: [
            {
                type: 'selectItem',
                title: 'Вид',
                icon: '',
                variable: 'type',
                options: [
                    {
                        label: 'производительность до 150 тыс.м3/час',
                        id: 'производительность до 150 тыс.м3/час',
                    },
                    {
                        label: 'производительность свыше 150 тыс.м3/час',
                        id: 'производительность свыше 150 тыс.м3/час',
                    },
                ],
            },
        ],
    },
    {
        label: 'Волоконно-оптическая линия связи (ВОЛС) тех характеристики',
        id: 'Волоконно-оптическая линия связи (ВОЛС) тех характеристики',
        children: [
            {
                type: 'numberItem',
                title: 'Количество км',
                icon: '',
                variable: 'length',
            },
        ],
    },
    {
        label: 'Воздушная линия электропередачи (ВЛ), тех характеристики',
        id: 'Воздушная линия электропередачи (ВЛ), тех характеристики',
        children: [
            {
                type: 'numberItem',
                title: 'Количество км',
                icon: '',
                variable: 'length',
            },
        ],
    },
    {
        label: 'Подъездная автодорога (ПАД), тех характеристики',
        id: 'Подъездная автодорога (ПАД), тех характеристики',
        children: [
            {
                type: 'numberItem',
                title: 'Количество км',
                icon: '',
                variable: 'length',
            },
        ],
    },
    {
        label: 'Линейно-производственное управление магистральных газопроводов, тех характеристики',
        id: 'Линейно-производственное управление магистральных газопроводов, тех характеристики',
        children: [
            {
                type: 'numberItem',
                title: 'Количество км',
                icon: '',
                variable: 'length',
            },
        ],
    },
];

export default function Hoc(HocComponent) {
    class HocClass extends React.Component {
        render() {
            return <HocComponent {...this.props} />;
        }
    }
    return HocClass;
}
