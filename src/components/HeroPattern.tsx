export function HeroPattern() {
  return (
    <div className="hero-pattern" aria-hidden="true">
      <svg
        className="hero-pattern__line hero-pattern__line--far"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
      >
        <path d="M-80 165C104 51 233 263 431 133s336 38 539-53 330 56 550-95" />
        <path d="M-80 196C104 82 233 294 431 164s336 38 539-53 330 56 550-95" />
      </svg>
      <svg
        className="hero-pattern__line hero-pattern__line--near"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
      >
        <path d="M-60 97c169 127 316-73 500 37s308-60 484 37 362-37 560 71" />
        <path d="M-60 126c169 127 316-73 500 37s308-60 484 37 362-37 560 71" />
      </svg>
      <span className="hero-pattern__spark hero-pattern__spark--one" />
      <span className="hero-pattern__spark hero-pattern__spark--two" />
      <span className="hero-pattern__spark hero-pattern__spark--three" />
    </div>
  );
}
