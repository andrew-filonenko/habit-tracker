export default function bem(ns, blockName) {
  return {
    block: `${ns}-${blockName}`,
    elem(name) {
      return `${ns}-${blockName}__${name}`;
    },
    mod(name) {
      return `${ns}-${blockName}--${name}`;
    }
  };
}
