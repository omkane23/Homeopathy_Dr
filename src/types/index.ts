export interface AppointmentForm {
    name: string;
    phone: string;
    email: string;
    message: string;
}

export interface AppointmentResponse {
    id: number;
    name: string;
    phone: string;
    email: string;
    message: string;
    created_at: string;
    status: string;
}

export interface Service {
    icon: string;
    title: string;
    description: string;
}

export interface Testimonial {
    name: string;
    review: string;
    rating: number;
    condition: string;
    avatar: string;
}

export interface WhyChooseItem {
    icon: string;
    title: string;
    description: string;
}
