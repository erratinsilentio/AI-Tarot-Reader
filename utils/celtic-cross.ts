interface CardPlacement {
  name: string;
  description: string;
}

interface CelticCross {
  [key: number]: CardPlacement;
}

export const CelticCrossMeanings: CelticCross = {
  1: {
    name: "The Present (Significator)",
    description:
      "This card represents the current state or the central issue at hand. It highlights the core of the question, describing the querent's current situation, energy, or main concern.",
  },
  2: {
    name: "The Challenge (Crossing Card)",
    description:
      "This card indicates the main obstacle or challenge facing the querent. It can show external or internal factors hindering progress or influencing the situation negatively or positively.",
  },
  3: {
    name: "The Foundation (Root of the Matter)",
    description:
      "This card reveals the underlying basis or root cause of the situation. It often represents deep-seated issues, motives, or subconscious influences that may have led to the current scenario.",
  },
  4: {
    name: "The Recent Past",
    description:
      "This card refers to past events or influences that have contributed to the present situation. It typically shows recent events or experiences that are still affecting the querent, sometimes hinting at lessons learned.",
  },
  5: {
    name: "The Goal or Destiny (Crowning Card)",
    description:
      "This card reflects the desired outcome, goals, or the querent's highest aspirations related to the situation. It can also represent what the querent is consciously working towards or the best possible result if things continue as they are.",
  },
  6: {
    name: "The Near Future",
    description:
      "This card suggests upcoming events or influences that will soon enter the querent’s life. It indicates what lies just ahead on the current path, often within a few weeks or months.",
  },
  7: {
    name: "The Querent’s Attitude or Internal Position",
    description:
      "This card represents the querent's inner thoughts, feelings, and attitudes towards the situation. It reveals how they are dealing with the situation emotionally and psychologically, as well as any hidden hopes, fears, or desires.",
  },
  8: {
    name: "External Influences",
    description:
      "This card points to outside factors affecting the situation, including people, social pressures, or environmental conditions. It highlights how others might influence the outcome or bring unexpected challenges or support.",
  },
  9: {
    name: "Hopes and Fears",
    description:
      "This card unveils the querent's hopes, fears, anxieties, or hidden desires regarding the situation. It often brings awareness to the querent's inner emotional state, showing what they most wish for or worry about.",
  },
  10: {
    name: "The Outcome",
    description:
      "This card represents the potential outcome or resolution of the situation if current energies remain unchanged. It gives insight into where things are likely headed, based on the existing dynamics and choices the querent makes moving forward.",
  },
};
