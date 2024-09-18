import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function DateFilterAtom({ date, setDate, setEndRequestDate, setStartRequestDate, testid="date-filter-element" }) {
    return (
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker  
                    
                    onChange={(newDate) => {setDate(newDate);
                        if (newDate) {
                            const startOfDay = dayjs(newDate).startOf('day').toDate();
                            const endOfDay = dayjs(newDate).endOf('day').toDate();
                            
                            console.log('Start of Day:', startOfDay); // Awal hari:  00:00:00.000
                            console.log('End of Day:', endOfDay);     // Akhir hari: 23:59:59.999

                            const startTimestamp = new Date(startOfDay).getTime();
                            const endTimestamp = new Date(endOfDay).getTime();
                            setStartRequestDate(startTimestamp);
                            setEndRequestDate(endTimestamp);
                            
                            console.log('Start Timestamp:', startTimestamp);
                            console.log('End Timestamp:', endTimestamp);
                        }
                    }} 
                    slotProps={{
                        textField: {
                            'data-testid': `${testid}`
                        }
                    }}
                    sx={{width: {xs: "100%", md: "12vw"}}} 
                    value={date}
                />
            </LocalizationProvider>
    )
}