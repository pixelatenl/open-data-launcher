import { FamilyFooter } from "@/components/family-footer";
import { PhotoCreditsDrawer } from "@/components/photo-credits-drawer";

/*
  The launcher footer: the family three-zone layout from the
  open-data-family registry, with the site's data note in the required
  credits slot and the photo credits drawer in the colophon's extra
  slot (the disclaimer slot stays unused). The signature and colophon
  (repository, organization) come from the FAMILY configuration.
*/
export function SiteFooter() {
  return (
    <FamilyFooter
      credits={
        <p>
          Every figure on this site is computed from official open data sources and can be
          verified through the same source.
        </p>
      }
      extra={<PhotoCreditsDrawer />}
    />
  );
}
