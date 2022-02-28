export const formatChartDate = (days: number) => {
    switch (days) {
        case 1:
            return (time: number[]) => {
                const tempDate = new Date(time[0]);
                return tempDate.getHours().toString() + ":00";
            };
        case 7:
            return (time: number[]) => {
                const tempDate = new Date(time[0]);
                return (
                    tempDate.getDate().toString() +
                    " " +
                    tempDate.getHours().toString() +
                    ":00"
                );
            };
        case 30:
            return (time: number[]) => {
                const tempDate = new Date(time[0]);
                return tempDate.getDate().toString();
            };
        default:
            return (time: number[]) => {
                const tempDate = new Date(time[0]);
                return (
                    tempDate.getDate().toString() +
                    "/" +
                    (tempDate.getMonth() + 1).toString()
                );
            };
    }
};