export const COMPANY_NAME = "binexahealth";
export const COMPANY_SLUG = "binexahealth";
export const COMPANY_DOMAIN = "binexahealth.com";
export const COMPANY_LEGAL_NAME = "binexahealth";

export const normalizeBrandText = (value) => {
  if (value == null || value === "") return value;
  return String(value)
    .replace(/meri\s*health/gi, COMPANY_NAME)
    .replace(/formscripts/gi, COMPANY_NAME);
};

export const normalizeProductData = (product) => {
  if (!product || typeof product !== "object") return product;

  return {
    ...product,
    product_name: normalizeBrandText(product.product_name),
    product_description: normalizeBrandText(product.product_description),
    product_brand: normalizeBrandText(product.product_brand || COMPANY_NAME),
  };
};

const BaseUrl = `https://panel.whitelabelmd.com/${COMPANY_SLUG}/api/`;

export const products_url = BaseUrl + "get_products";
export const cheke_state = BaseUrl + "cheke_state";
export const add_user_check_product = BaseUrl + "createOrder_test";
export const createOrder_test_new = BaseUrl + "createOrder_test";
export const contact_details_step_25 = BaseUrl + "contact_details_step_25";
export const get_checkout_link_data = BaseUrl + "get_checkout_link_data";
export const get_product_details = BaseUrl + "get_product_details";
export const get_product_details_v3 = BaseUrl + "get_product_details_v3";
export const get_url_data = BaseUrl + "get_url_data";
export const createOrder_test = BaseUrl + "createOrder_test";
export const check_coupons = BaseUrl + "check_coupons";
export const check_coupons_v3 =
  "https://panel.whitelabelmd.com/wlmdbackend/api/check_coupons_v3";
export const SITE_ID = "421";
export const member_view = BaseUrl + "member_view";
