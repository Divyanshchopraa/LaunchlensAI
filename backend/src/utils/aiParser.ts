export function extractJSON(text: string) {

  try {

    const match = text.match(/\{[\s\S]*\}/);

    if (!match) return {};

    return JSON.parse(match[0]);

  } catch (error) {

    console.log("JSON parse failed");

    return {};

  }

}