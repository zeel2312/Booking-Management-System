import { ConfirmBookingProps } from '@/app/confirm-booking/page';
import { useEffect, useState } from 'react';
import { Barcode, QRCode } from '@progress/kendo-react-barcodes';



interface TicketApiResponse {
    seats_booked: number,
    booked_date: string,
    title: string,
    genre: string,
    language: string,
    duration: string,
    t_name: string,
    t_address: string,
    t_city: string,
    t_state: string,
    t_country: string,
    screen_name: string
}

interface TicketDetals {
    seatsBooked: number,
    bookedDate: string,
    title: string,
    genre: string,
    language: string,
    duration: string,
    tName: string,
    tAddress: string,
    tCity: string,
    tState: string,
    tCountry: string,
    screenName: string
}

const ViewTicket = ({ searchParams }: ConfirmBookingProps) => {
    const [ticket, setTicket] = useState<TicketDetals | null>(null);
    const tickeUrl = 'http://127.0.0.1:8000/get_ticket_by_booking_id/';


    const getTicketDetails = async (id: number, email: string) => {
        if (id && email) {
            const response = await fetch(tickeUrl + id + '/?email=' + email, { method: 'get' })
            const data: TicketApiResponse = await response.json();
            console.log(data)
            const ticket: TicketDetals = {
                seatsBooked: data?.seats_booked,
                bookedDate: data?.booked_date?.split('T')[0],
                title: data?.title,
                genre: data?.genre,
                language: data?.language,
                duration: data?.duration,
                tName: data?.t_name,
                tAddress: data?.t_address,
                tCity: data?.t_city,
                tState: data?.t_state,
                tCountry: data?.t_country,
                screenName: data?.screen_name
            }
            setTicket(ticket)
        }
    }

    useEffect(() => {
        getTicketDetails(searchParams?.bookingId, searchParams?.email)
    }, [])

    return (
        <section className='h-100 d-flex align-items-center'>
            {ticket && <div className='w-100 h-50'>
                <div className='mx-5 ticket-box text-white rounded row'>
                    <div className='px-5 py-3 col-md-9'>
                        <div className='text-center mb-4' style={{ fontSize: '30px' }}>Ticket</div>
                        <div className='row' style={{ fontSize: '16px' }}>
                            <div className='col-md-6'>
                                <div className='mb-1'>
                                    Movie Name - {ticket?.title}
                                </div>
                                <div className='mb-1'>
                                    Genre - {ticket?.genre}
                                </div>
                                <div className='mb-1'>
                                    Language - {ticket?.language}
                                </div>
                                <div className='mb-1'>
                                    Tickets Booked - {ticket?.seatsBooked}
                                </div>
                                <div className='mb-1'>
                                    Booked Date - {ticket?.bookedDate}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='mb-1'>
                                    Theatre Name - {ticket?.title}
                                </div>
                                <div className='mb-1'>
                                    Theatre Address - {ticket?.tAddress}, {ticket?.tCity}
                                </div>
                                <div className='mb-1'>
                                    State - {ticket?.tState}
                                </div>
                                <div className='mb-1'>
                                    Country - {ticket?.tCountry}
                                </div>
                                <div className='mb-1'>
                                    Screen - {ticket?.screenName}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 d-flex flex-column align-items-center justify-content-center border-left-qr'> 
                        <QRCode value="https://www.telerik.com/kendo-react-ui/components/barcodes/" />
                        <div className='mb-1 mt-4'>
                            Email - {searchParams.email}
                        </div>
                    </div>
                </div>
            </div>}
        </section>
    )
}

export default ViewTicket;