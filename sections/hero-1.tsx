interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
  /**
   * @description The color you want.
   */
  color?: string;
    /**
   * @intensity Of the color you want, like: bg-neutral-900.
   */
  intensity?: string;
}

export default function Section({ name = "Capy", color = "neutral" }: Props) {
  return (
    <div class={`bg-${color}-900 p-8 rounded-md shadow-md`}>
      <h2 class="text-2xl font-semibold mb-4">Fancy Component</h2>

      <div class="space-y-4">
        <button class={`btn btn-${color}`}>Click me</button>

        <input
          type="text"
          class="input input-bordered"
          placeholder="Type something"
        />

        <div class={`alert alert-${color}`}>
          {name}
        </div>
      </div>
    </div>
  );
}
