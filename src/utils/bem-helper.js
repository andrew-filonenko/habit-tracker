export default function bem(ns, blockName) {
  const block = blockName ? `${ns}-${blockName}` : ns;
  return {
    block,
    elem(name) {
      return `${block}__${name}`;
    },
    mod(name, condition) {
      const modClass = `${block}--${name}`;
      if (arguments.length === 1) return modClass;
      return condition ? modClass : null;
    }
  };
}
