import { ImageWidget } from "https://cdn.jsdelivr.net/gh/deco-cx/apps%400.40.1/admin/widgets";

interface Props {
  /**
   * @description The color you want.
   */
  color?: string;
  /**
 * @intensity Of the color you want, like: bg-neutral-900.
 */
  intensity?: string;
  title?: string;
  image?: {
    src?: ImageWidget;
    alt?: string;
  };
}

export default function Section(
  { 
  title = "Titulo Component", 
  color = "neutral", 
  intensity = "100", 
  image = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo"
  }
}: Props) {
  return (
    <div class={`bg-${color}-900 p-8 mx-2 rounded-md shadow-md`}>
    {title} teste
    </div>
  );
}
