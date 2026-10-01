import React, { useState, useEffect } from 'react';
import { Resort, HolidayPackage, BookingFormState } from '../types';
import { 
  X, 
  Calendar, 
  Users, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircle, 
  CreditCard,
  Printer
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  resorts: Resort[];
  packages: HolidayPackage[];
  initialItemType?: 'resort' | 'package';
  initialItemId?: string;
  initialRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  resorts,
  packages,
  initialItemType = 'resort',
  initialItemId,
  initialRoomId,
}) => {
  const [itemType, setItemType] = useState<'resort' | 'package'>(initialItemType);
  const [selectedItemId, setSelectedItemId] = useState<string>(
    initialItemId || (initialItemType === 'resort' ? resorts[0]?.id : packages[0]?.id) || 'bliss-of-nature'
  );
  const [selectedRoomId, setSelectedRoomId] = useState<string>(initialRoomId || '');
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [roomsCount, setRoomsCount] = useState<number>(1);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  // Add-ons
  const [addOnRafting, setAddOnRafting] = useState<boolean>(false);
  const [addOnAirportPickup, setAddOnAirportPickup] = useState<boolean>(false);
  const [addOnBonfireDinner, setAddOnBonfireDinner] = useState<boolean>(false);

  // Confirmed State
  const [confirmedBooking, setConfirmedBooking] = useState<{
    bookingRef: string;
    totalAmount: number;
    itemName: string;
    dates: string;
  } | null>(null);

  // Sync initial props when opened
  useEffect(() => {
    if (initialItemType) setItemType(initialItemType);
    if (initialItemId) setSelectedItemId(initialItemId);
    if (initialRoomId) setSelectedRoomId(initialRoomId);
  }, [initialItemType, initialItemId, initialRoomId, isOpen]);

  if (!isOpen) return null;

  // Selected object
  const currentResort = resorts.find((r) => r.id === selectedItemId);
  const currentPackage = packages.find((p) => p.id === selectedItemId);
  const currentRoom = currentResort?.rooms.find((rm) => rm.id === selectedRoomId) || currentResort?.rooms[0];

  // Dynamic pricing calculation
  let basePrice = 0;
  let nights = 2; // default
  if (checkIn && checkOut) {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diff = Math.max(1, Math.round((d2.getTime() - d1.getTime()) / (1000 * 3600 * 24)));
    if (!isNaN(diff) && diff > 0) nights = diff;
  }

  if (itemType === 'resort') {
    const roomRate = currentRoom?.pricePerNight || currentResort?.startingPrice || 6500;
    basePrice = roomRate * nights * roomsCount;
  } else {
    const packageRate = currentPackage?.startingPrice || 11999;
    basePrice = packageRate * guestsCount;
  }

  const addOnCost =
    (addOnRafting ? 1500 * guestsCount : 0) +
    (addOnAirportPickup ? 2200 : 0) +
    (addOnBonfireDinner ? 1800 * guestsCount : 0);

  const subtotal = basePrice + addOnCost;
  const gstTaxes = Math.round(subtotal * 0.12);
  const grandTotal = subtotal + gstTaxes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const ref = `BON-2026-${randomNum}`;
    const name = itemType === 'resort' ? (currentResort?.name || 'Resort Stay') : (currentPackage?.title || 'Holiday Package');
    const dateRange = checkIn && checkOut ? `${checkIn} to ${checkOut}` : 'Selected Dates';

    setConfirmedBooking({
      bookingRef: ref,
      totalAmount: grandTotal,
      itemName: name,
      dates: dateRange
    });
  };

  const getWhatsAppMessage = () => {
    if (!confirmedBooking) return '';
    return encodeURIComponent(
      `Hello BON Holidays! I have made a reservation request:
Booking Ref: ${confirmedBooking.bookingRef}
Item: ${confirmedBooking.itemName}
Guest Name: ${guestName}
Phone: ${guestPhone}
Guests: ${guestsCount}
Dates: ${confirmedBooking.dates}

Please share room availability and tariff quote.`
    );
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-neutral-200 text-[#17231F]"
      >
        {/* Modal Header */}
        <div className="bg-[#17231F] text-white p-5 sm:p-6 flex items-center justify-between border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#E8A43A] font-semibold tracking-wider uppercase">
              <span>BON Holidays</span>
              <span aria-hidden="true">·</span>
              <span>Direct Reservation Portal</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
              {confirmedBooking ? 'Reservation Confirmation' : 'Plan & Book Your Journey'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {confirmedBooking ? (
            /* Confirmation Screen */
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="p-6 bg-[#16745A]/10 border border-[#16745A]/30 rounded-2xl text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#16745A] text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-display text-2xl font-bold text-[#17231F]">
                    Reservation Initiated Successfully!
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Your preliminary reservation code is{' '}
                    <strong className="text-[#16745A] font-mono font-bold text-sm">
                      {confirmedBooking.bookingRef}
                    </strong>
                  </p>
                </div>
              </div>

              {/* Summary Voucher Card */}
              <div className="bg-[#F5F7F6] p-5 rounded-xl border border-neutral-200 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500">Reserved Experience:</span>
                  <span className="font-bold text-[#17231F]">{confirmedBooking.itemName}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500">Lead Guest:</span>
                  <span className="font-semibold text-[#17231F]">{guestName} ({guestPhone})</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500">Stay / Travel Dates:</span>
                  <span className="font-semibold text-[#17231F]">{confirmedBooking.dates}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500">Guests / Rooms:</span>
                  <span className="font-semibold text-[#17231F]">
                    {guestsCount} Guest(s) · {roomsCount} Room(s)
                  </span>
                </div>
                <div className="flex justify-between pt-1 text-base font-bold text-[#16745A]">
                  <span>Tariff Status:</span>
                  <span>Custom Quote on Request</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-xs text-neutral-600 text-center leading-relaxed">
                  Our reservations desk in Rishikesh has received your details. To lock in your dates instantly or arrange payment via UPI/Card, connect directly via WhatsApp:
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/919149074344?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Confirm & Chat on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => window.print()}
                    className="py-3 px-4 rounded-xl border border-neutral-300 hover:bg-neutral-100 text-neutral-700 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Slip</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Type Switcher */}
              <div className="flex items-center gap-2 p-1 bg-[#F5F7F6] rounded-xl border border-neutral-200">
                <button
                  type="button"
                  onClick={() => {
                    setItemType('resort');
                    setSelectedItemId(resorts[0]?.id || 'bliss-of-nature');
                  }}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    itemType === 'resort'
                      ? 'bg-[#16745A] text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Resort or Stay
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setItemType('package');
                    setSelectedItemId(packages[0]?.id || 'bliss-of-nature-package');
                  }}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    itemType === 'package'
                      ? 'bg-[#16745A] text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Holiday Package
                </button>
              </div>

              {/* Selection Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-neutral-700">
                    {itemType === 'resort' ? 'Select Resort / Property' : 'Select Holiday Package'}
                  </label>
                  <select
                    value={selectedItemId}
                    onChange={(e) => {
                      setSelectedItemId(e.target.value);
                      setSelectedRoomId('');
                    }}
                    className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg p-2.5 text-xs sm:text-sm text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                  >
                    {itemType === 'resort'
                      ? resorts.map((r) => (
                          <option key={r.id} value={r.id}>
                            {r.name} ({r.location.split(',')[0]})
                          </option>
                        ))
                      : packages.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.title} ({p.durationText})
                          </option>
                        ))}
                  </select>
                </div>

                {itemType === 'resort' && currentResort?.rooms && (
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-neutral-700">
                      Room / Cottage Category
                    </label>
                    <select
                      value={selectedRoomId || currentResort.rooms[0]?.id}
                      onChange={(e) => setSelectedRoomId(e.target.value)}
                      className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg p-2.5 text-xs sm:text-sm text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                    >
                      {currentResort.rooms.map((rm) => (
                        <option key={rm.id} value={rm.id}>
                          {rm.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-neutral-700">
                    Check-In
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg p-2 text-xs text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-neutral-700">
                    Check-Out
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg p-2 text-xs text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-neutral-700">
                    Guests
                  </label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(Number(e.target.value))}
                    className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg p-2 text-xs text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-neutral-700">
                    Rooms
                  </label>
                  <select
                    value={roomsCount}
                    onChange={(e) => setRoomsCount(Number(e.target.value))}
                    className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg p-2 text-xs text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Room' : 'Rooms'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Add-Ons */}
              <div className="space-y-2 pt-2 border-t border-neutral-100">
                <span className="block text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Optional Uttarakhand Add-Ons
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className="flex items-start gap-2 p-3 bg-[#F5F7F6] rounded-xl border border-neutral-200 cursor-pointer text-xs">
                    <input
                      type="checkbox"
                      checked={addOnRafting}
                      onChange={(e) => setAddOnRafting(e.target.checked)}
                      className="mt-0.5 accent-[#16745A]"
                    />
                    <div>
                      <span className="font-semibold block text-neutral-900">16km River Rafting</span>
                      <span className="text-neutral-500 text-[11px]">Guided Adventure Experience</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-2 p-3 bg-[#F5F7F6] rounded-xl border border-neutral-200 cursor-pointer text-xs">
                    <input
                      type="checkbox"
                      checked={addOnAirportPickup}
                      onChange={(e) => setAddOnAirportPickup(e.target.checked)}
                      className="mt-0.5 accent-[#16745A]"
                    />
                    <div>
                      <span className="font-semibold block text-neutral-900">Airport Pickup (DED)</span>
                      <span className="text-neutral-500 text-[11px]">Dehradun / Haridwar Transfer</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-2 p-3 bg-[#F5F7F6] rounded-xl border border-neutral-200 cursor-pointer text-xs">
                    <input
                      type="checkbox"
                      checked={addOnBonfireDinner}
                      onChange={(e) => setAddOnBonfireDinner(e.target.checked)}
                      className="mt-0.5 accent-[#16745A]"
                    />
                    <div>
                      <span className="font-semibold block text-neutral-900">Campfire BBQ Night</span>
                      <span className="text-neutral-500 text-[11px]">Riverside / Lawn Dining</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-3 pt-2 border-t border-neutral-100">
                <span className="block text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Guest Contact Details
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg p-2.5 text-xs text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg p-2.5 text-xs text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp *"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg p-2.5 text-xs text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                  />
                </div>

                <textarea
                  rows={2}
                  placeholder="Special requests or dietary preferences (e.g. Pure Vegetarian, Anniversary celebration, late check-in)..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg p-2.5 text-xs text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                />
              </div>

              {/* Reservation Details Summary Box */}
              <div className="bg-[#17231F] text-white p-4 rounded-xl space-y-2 text-xs">
                <div className="flex justify-between text-white/80">
                  <span>Selected Stay / Experience:</span>
                  <span className="font-semibold text-white">{currentResort?.name || currentPackage?.title || 'Selected Stay'}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Duration:</span>
                  <span>{checkIn && checkOut ? `${checkIn} to ${checkOut} (${nights} Night${nights > 1 ? 's' : ''})` : 'Flexible Dates'}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Guests & Rooms:</span>
                  <span>{guestsCount} Guest(s) · {roomsCount} Room(s)</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#E8A43A] pt-2 border-t border-white/20">
                  <span>Tariff:</span>
                  <span>Available on Request</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-[#16745A] hover:bg-[#0D5743] active:scale-[0.98] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-[#E8A43A]" />
                <span>Submit Reservation Request</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
