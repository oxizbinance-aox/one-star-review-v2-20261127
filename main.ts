// One-star review of something essential — v2
// The review: a phone battery that quits at the worst possible moment.
// One concrete human moment, instantly picturable, twist in the last phrase.

const REVIEW: string = "My phone died at 2% while I was lost. In the rain. One star.";

const MAX_CHARS: number = 70;

function checkLine(line: string): { chars: number; underLimit: boolean; hasTwist: boolean; endsOneStar: boolean } {
  const chars = line.length;
  const underLimit = chars <= MAX_CHARS;
  const endsOneStar = line.trimEnd().endsWith("One star.");
  // The twist lives in the last phrase BEFORE the closing "One star.":
  // "In the rain." — the moment gets worse exactly when it could not
  // get worse. Strip the rating sentence first, then read the last phrase.
  const withoutRating = line.replace(/\s*One star\.\s*$/, "");
  const lastPhrase = withoutRating.split(".").filter((p) => p.trim().length > 0).pop() ?? "";
  const hasTwist = lastPhrase.trim() === "In the rain";
  return { chars, underLimit, hasTwist, endsOneStar };
}

function main(): void {
  const result = checkLine(REVIEW);
  console.log(REVIEW);
  console.log(`chars: ${result.chars} (limit ${MAX_CHARS}, under: ${result.underLimit})`);
  console.log(`ends with "One star.": ${result.endsOneStar}`);
  console.log(`twist in last phrase: ${result.hasTwist}`);
  if (!result.underLimit || !result.endsOneStar || !result.hasTwist) {
    console.error("REVIEW FAILED ITS OWN CHECKS");
    process.exit(1);
  }
  console.log("REVIEW OK");
}

main();
