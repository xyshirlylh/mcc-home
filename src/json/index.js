import pdConstruction from "./pd-construction/index";
import pdProperty from "./pd-property/index";
import urban from "./urban-design/index"

export default {
  ...pdConstruction,
  ...pdProperty,
  ...urban,
}