import type { ReactNode } from "react";

type SectionProps = {
  /** Anchor id used by nav links (e.g. href="#a-propos"). Omit for sections that aren't linked from the nav. */
  id?: string;
  /** Extra classes on the outer <section> — background, text color, borders, custom min-height, etc. */
  className?: string;
  /** Extra classes on the inner `.page-container` div, e.g. "relative" for a section with an absolutely-positioned background layer. */
  containerClassName?: string;
  /** Applies the standard vertical rhythm (.section-space). Set to false for sections that define their own padding (e.g. a hero with a custom min-height, or a band with tighter padding). */
  spacing?: boolean;
  /** Small uppercase label above the title, e.g. "01 · À propos". */
  eyebrow?: ReactNode;
  /** Section heading. Omit to render a heading-less section (fully custom `children`). */
  title?: ReactNode;
  /** Overrides the title's default type size/weight classes. */
  titleClassName?: string;
  /** Extra classes on the eyebrow+title wrapper, e.g. "max-w-2xl". */
  headingClassName?: string;
  /** Optional paragraph next to or under the heading. */
  description?: ReactNode;
  /** Puts the description beside the heading on desktop instead of stacking it below. */
  split?: boolean;
  /** Adds the standard top divider above the heading. Set to false for sections without one. */
  bordered?: boolean;
  children?: ReactNode;
};

/**
 * Shared shell for a top-level page section: the <section> tag, the
 * `.page-container` wrapper, and an optional eyebrow/title/description
 * heading block. Sections whose layout doesn't fit this shape (the hero,
 * the two-column "Parcours" band, the contact band) still use Section for
 * the outer shell but skip the heading props, building their own markup as
 * `children` instead.
 */
function Section({
  id,
  className = "",
  containerClassName = "",
  spacing = true,
  eyebrow,
  title,
  titleClassName = "font-serif text-4xl leading-tight md:text-6xl",
  headingClassName = "",
  description,
  split = false,
  bordered = true,
  children,
}: SectionProps) {
  const hasHeading = Boolean(eyebrow || title);

  return (
    <section
      className={[spacing && "section-space", className]
        .filter(Boolean)
        .join(" ")}
      id={id}
    >
      <div className={["page-container", containerClassName].filter(Boolean).join(" ")}>
        {hasHeading &&
          (split ? (
            <div
              className={[
                bordered ? "section-heading" : "",
                "md:flex md:items-end md:justify-between",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className={headingClassName}>
                {eyebrow && <p className="eyebrow">{eyebrow}</p>}
                {title && <h2 className={titleClassName}>{title}</h2>}
              </div>
              {description && (
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/55 md:mt-0">
                  {description}
                </p>
              )}
            </div>
          ) : (
            <div
              className={[bordered ? "section-heading" : "mb-12", headingClassName]
                .filter(Boolean)
                .join(" ")}
            >
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {title && <h2 className={titleClassName}>{title}</h2>}
              {description && (
                <p className="mt-7 max-w-sm leading-relaxed text-ink/60">
                  {description}
                </p>
              )}
            </div>
          ))}
        {children}
      </div>
    </section>
  );
}

export default Section;
