// All editable wedding content and settings live here.

export const WEDDING = {
  brideShort: 'Sandra',
  groomShort: 'Abhiram',
  brideFull: 'Sandra Menon P',
  groomFull: 'Abhiram P',
  dateLabel: '22 · AUGUST · 2026',
  dateTime: '2026-08-22T17:00:00+05:30',
  landingVenue: 'NAKSHATRA AUDITORIUM, MANNUR',
  footerLine: '22 AUGUST 2026 · MANNUR',
};

export const EVENTS = [
  {
    num: '01',
    title: 'WEDDING RECEPTION',
    date: '22.08.2026 · Saturday',
    dateSub: '1202 Chingam 6',
    time: '5:00 PM — 8:00 PM',
    venue: 'Nakshatra Auditorium',
    address: 'Mannur, Palakkad, Kerala',
    mapsUrl: 'https://maps.app.goo.gl/KjRHrCjcqjm8h2Dq8',
  },
];

// Shown below the event card, as on the printed invitation.
export const MARRIAGE_NOTE =
  'Marriage will be solemnized on 21 August 2026 (1202 Chingam 5), Friday, at Kavitha Auditorium, Malampuzha — Muhoortham between 10:30 am & 11:30 am.';

export const FAMILIES = [
  {
    side: "BRIDE'S FAMILY",
    name: 'Sandra Menon P',
    father: 'T.E. Vijayan',
    mother: 'Sheeja P',
    residence: 'Dwaraka (Valiya Padaveedu), Akathethara, Palakkad',
  },
  {
    side: "GROOM'S FAMILY",
    name: 'Abhiram P',
    father: 'Late Sivaraman Nair',
    mother: 'Ajitha Sivaraman',
    residence: 'Panthathodi Kalam, Mannur West, Kottakunnu, Palakkad',
  },
];

// Drop the actual image files into public/photos/ with these names.
export const MOMENTS = [
  { id: 'photo1', src: 'photos/photo1.jpg', caption: 'Every love story is beautiful, but ours is my favourite.' },
  { id: 'photo2', src: 'photos/photo2.jpg', caption: 'Together is a wonderful place to be.' },
  { id: 'photo3', src: 'photos/photo3.jpg', caption: 'You are my today and all of my tomorrows.' },
  { id: 'photo4', src: 'photos/photo4.jpg', caption: 'Two hearts, one forever.' },
];

export const VERSE = {
  sanskrit: 'समानी व आकूतिः समाना हृदयानि वः । समानमस्तु वो मनो यथा वः सुसहासति ॥',
  english:
    '"United be your purpose, harmonious your hearts, united your minds — so that you may live together in accord."',
  reference: '— RIG VEDA 10.191.4',
};

// Realtime Database path for this couple
export const WISH_PATH = 'sandra-abhiram/wishes';

export const FIREBASE_CONFIG = {
  databaseURL:
    'https://sandra-abhiram-wedding-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'sandra-abhiram-wedding',
  authDomain: 'sandra-abhiram-wedding.firebaseapp.com',
};
