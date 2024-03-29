const today = new Date();
const currentYear = today.getFullYear();

export const calendarData = {
    events: [
        {
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(currentYear, 3, 0),
            end: new Date(currentYear, 3, 1),
        },
        {
            title: 'Long Event',
            start: new Date(currentYear, 3, 7),
            end: new Date(currentYear, 3, 10),
        },

        {
            title: 'DTS STARTS',
            start: new Date(2016, 2, 13, 0, 0, 0),
            end: new Date(2016, 2, 20, 0, 0, 0),
        },

        {
            title: 'DTS ENDS',
            start: new Date(2016, 10, 6, 0, 0, 0),
            end: new Date(2016, 10, 13, 0, 0, 0),
        },

        {
            title: 'Some Event',
            start: new Date(currentYear, 3, 9, 0, 0, 0),
            end: new Date(currentYear, 3, 9, 0, 0, 0),
        },
        {
            title: 'Conference',
            start: new Date(currentYear, 3, 11),
            end: new Date(currentYear, 3, 13),
            desc: 'Big conference for important people',
        },
        {
            title: 'Meeting',
            start: new Date(currentYear, 3, 12, 10, 30, 0, 0),
            end: new Date(currentYear, 3, 12, 12, 30, 0, 0),
            desc: 'Pre-meeting meeting, to prepare for the meeting',
        },

        {
            title: 'Meeting',
            start: new Date(currentYear, 3, 12, 14, 0, 0, 0),
            end: new Date(currentYear, 3, 12, 15, 0, 0, 0),
        },
        {
            title: 'Happy Hour',
            start: new Date(currentYear, 3, 12, 17, 0, 0, 0),
            end: new Date(currentYear, 3, 12, 17, 30, 0, 0),
            desc: 'Most important meal of the day',
        },
        
        {
            title: 'Multi-day Event',
            start: new Date(currentYear, 3, 20, 19, 30, 0),
            end: new Date(currentYear, 3, 22, 2, 0, 0),
        },
    ],
};

export const cultures = [
    {id: 'en', title: 'en'},
    {id: 'en-GB', title: 'en-GB'},
    {id: 'es', title: 'es'},
    {id: 'fr', title: 'fr'},
    {id: 'ar-AE', title: 'ar-AE'},
];
