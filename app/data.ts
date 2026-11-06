// All invitation content lives here — edit this file to personalise the template.

export const C = {
  bg: "#FBF8F1",
  ink: "#3A4039",
  green: "#4A6151",
  greenDark: "#2F4137",
  greenMid: "#587261",
  greenDeep: "#3E5341",
  sage: "#8FA58B",
  gold: "#C7A24B",
  goldLight: "#D8BE84",
  muted: "#79817A",
  card: "#FFFDF8",
  cream: "#F6EFDD",
};

export const F = {
  body: 'var(--font-sn-body), "Cormorant Garamond", Georgia, serif',
  script: 'var(--font-mea), "Mea Culpa", cursive',
  sans: 'var(--font-montserrat), "Montserrat", sans-serif',
  deco: 'var(--font-cinzel-decorative), "Cinzel Decorative", serif',
  serif: 'var(--font-serif), "Playfair Display", serif',
  marcellus: 'var(--font-marcellus), "Marcellus", serif',
};

export const invitation = {
  bride: "Nethmi",
  groom: "Kavindu",
  initials: ["N", "K"] as const,
  // ISO date-time with Sri Lanka offset — drives the countdown & calendar links
  weddingStart: "2027-12-12T09:45:00+05:30",
  weddingEnd: "2027-12-12T23:30:00+05:30",
  dateLong: "Sunday, December 12, 2027",
  dateShort: "12 . 12 . 27",
  rsvpBy: "Kindly respond by the 15th of November 2027",
  maxGuests: 4,

  // Photos (set to null to show the "Your photo" placeholder)
  heroPhoto: "/photos/hero.webp" as string | null,
  storyPhoto: "/photos/story.webp" as string | null,


  events: [
    { icon: "rings", title: "PORUWA CEREMONY", time: "9:45 AM", place: "Jetwing Lighthouse, Galle", detail: "Traditional Poruwa ceremony on the Ocean Lawn" },
    { icon: "utensils", title: "RECEPTION", time: "6:30 PM", place: "Jetwing Lighthouse, Galle", detail: "Dinner, music and dancing in the Ballroom" },
  ],

  dressCode: {
    title: "Formal / Traditional",
    text: "Sarees, osariyas and suits in soft sage, olive green, ivory or gold would be lovely.",
    palette: ["#4A6151", "#8FA58B", "#F8F3EA", "#D8BE84", "#C7A24B"],
  },

  venue: {
    name: "Jetwing Lighthouse",
    address: "Dadella, Galle 80000, Sri Lanka",
  },

  contacts: [
    { label: "Bride", phone: "+94712345678" },
    { label: "Groom", phone: "+94759876543" },
  ],
};
