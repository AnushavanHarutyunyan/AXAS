import { Table } from '@consta/uikit/Table';
import { Text } from '@consta/uikit/Text';
import Slider from 'react-slick';
import hook from './Hooks';
import { Document, Menu } from '../../components';
import './style.css';
function Home(props) {
    const { task_array, set_task_info, handleClickRow } = hook(props);
    const columns = [
        {
            title: '# задания',
            accessor: 'task_id',
            align: 'task',
            // width: 100,
            sortable: true,
        },
        {
            title: 'Категория заданий',
            accessor: 'task_category',
            sortable: true,
        },
        {
            title: 'Наименование задания',
            accessor: 'task_name',
            sortable: true,
        },
        {
            title: 'Редактор',
            accessor: 'editor',
            sortable: true,
        },
        {
            title: 'Дата создания',
            accessor: 'created_at',
            sortable: true,
            renderCell: (item) => {
                return <span>{new Date(item.created_at).toDateString()}</span>;
            },
        },
        {
            title: '',
            accessor: 'create_date',
            sortable: true,
            renderCell: () => (
                <div className="table-row-icons">
                    <span className="icon-copy"></span>
                    <span className="icon-delete"></span>
                </div>
            ),
        },
    ];
    const rows = [
        {
            task: 'ЗП-0063/19',
            category: 'Обустройство Романовского месторождения',
            task_name: 'Куст скважин 25',
            editor: 'Руслан Ковалев',
            create_date: '09.08.2020 – 00:00:00',
        },
        {
            task: 'ЗП-0063/19',
            category: 'Обустройство Романовского месторождения',
            task_name: 'Куст скважин 25',
            editor: 'Руслан Ковалев',
            create_date: '09.08.2020 – 00:00:00',
        },
        {
            task: 'ЗП-0063/19',
            category: 'Обустройство Романовского месторождения',
            task_name: 'Куст скважин 25',
            editor: 'Руслан Ковалев',
            create_date: '09.08.2020 – 00:00:00',
        },
        {
            task: 'ЗП-0063/19',
            category: 'Обустройство Романовского месторождения',
            task_name: 'Куст скважин 25',
            editor: 'Руслан Ковалев',
            create_date: '09.08.2020 – 00:00:00',
        },
        {
            task: 'ЗП-0063/19',
            category: 'Обустройство Романовского месторождения',
            task_name: 'Куст скважин 25',
            editor: 'Руслан Ковалев',
            create_date: '09.08.2020 – 00:00:00',
        },
        {
            task: 'ЗП-0063/19',
            category: 'Обустройство Романовского месторождения',
            task_name: 'Куст скважин 25',
            editor: 'Руслан Ковалев',
            create_date: '09.08.2020 – 00:00:00',
        },
        {
            task: 'ЗП-0063/19',
            category: 'Обустройство Романовского месторождения',
            task_name: 'Куст скважин 25',
            editor: 'Руслан Ковалев',
            create_date: '09.08.2020 – 00:00:00',
        },
        {
            task: 'ЗП-0063/19',
            category: 'Обустройство Романовского месторождения',
            task_name: 'Куст скважин 25',
            editor: 'Руслан Ковалев',
            create_date: '09.08.2020 – 00:00:00',
        },
    ];
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div
        // className='home-cont'
        >
            <Menu />
            <div className="home">
                <Text size="2xl" className="heading">
                    Добро пожаловать в SmartEstimate
                </Text>
                <Text size="l" className="section-heading">
                    Избранные документы
                </Text>
                <div className="scroll">
                    <div className="documnet-cont">
                        <Slider {...settings}>
                            <div
                                className="add-document"
                                onClick={() => {
                                    var dt = new Date();
                                    set_task_info({
                                        task_id: dt.getTime(),
                                        task_category:
                                            'Обустройство Романовского месторождения',
                                        task_name: 'Задание на проектирование',
                                        editor: 'Руслан Ковалев',
                                    });
                                    // add_tasks_action()
                                    props.history.push('/estimate');
                                }}
                            >
                                <div className="round">
                                    <span className="icon-plus"></span>
                                </div>
                                <Text size="s" className="title">
                                    Новый расчет
                                </Text>
                            </div>
                            <Document title="Куст нефтяных скважин - Обустройство" />
                            <Document title="Куст нефтяных скважин - Обустройство" />
                            <Document title="Куст нефтяных скважин - Обустройство" />
                            <Document title="Куст нефтяных скважин - Обустройство" />
                            <Document title="Куст нефтяных скважин - Обустройство" />
                            <Document title="Куст нефтяных скважин - Обустройство" />
                            <Document title="Куст нефтяных скважин - Обустройство" />
                        </Slider>
                    </div>
                </div>
                <Text size="l" className="section-heading">
                    Архив расчетов
                </Text>
                <Table
                    className="table-cont"
                    rows={task_array}
                    columns={columns}
                    borderBetweenRows
                    activeRow={{
                        task_id: undefined,
                        onChange: (item) => handleClickRow(item),
                    }}
                />
            </div>
        </div>
    );
}

export default Home;
