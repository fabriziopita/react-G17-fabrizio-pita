import type { Ticket } from "../dominio/tipos";

const CLAVE_TICKETS = 'tienda_tickets';

export function leerTickets(): Ticket[] {
    try {
        const crudo: unknown = JSON.parse(localStorage.getItem(CLAVE_TICKETS) ?? '[]');
        return Array.isArray(crudo) ? crudo as Ticket[] : [];
    } catch {
        return [];
    }
}

export function leerConsultasRealizadas(usuarioId: number): number {
    return leerTickets().filter((ticket) => ticket.usuarioId === usuarioId).length;
}

export function guardarTicket(ticket: Ticket) : boolean {
    try {
        localStorage.setItem(CLAVE_TICKETS, JSON.stringify([...leerTickets(), ticket]));
        return true;
    } catch (error) {
        console.warn('No se pudo guardar el ticket de consulta', error instanceof Error ? error.message : error);
        return false;
    }
}