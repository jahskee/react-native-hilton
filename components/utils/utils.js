/* jshint esversion: 6 */
export const addKeys = (val, key) => ({ key: "" + key, ...val });

export function escapeUnicode() {
  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
  };

  return function() {
    return this.replaceAll("&quot;", '"')
      .replaceAll("&epsilon;", "ϵ")
      .replaceAll("&Phi;", "ϕ")
      .replaceAll("&ocirc;", "Û")
      .replaceAll("&Aring", "Å")
      .replaceAll("&#039;", "'");
  };
}

export function toTitleCase(string) {
  // \u00C0-\u00ff for a happy Latin-1
  return string
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b([a-z\u00C0-\u00ff])/g, function(_, initial) {
      return initial.toUpperCase();
    })
    .replace(/(\s(?:de|a|o|e|da|do|em|ou|[\u00C0-\u00ff]))\b/gi, function(
      _,
      match
    ) {
      return match.toLowerCase();
    });
}
