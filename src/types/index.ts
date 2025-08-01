import { collections } from "@wix/stores";
import { MODE } from "../enums/auth-mode.enum";
export type SlideType = {
  id: number;
  title: string;
  description: string;
  img: string;
  url: string;
  bg: string;
};

export type ProductItem = {
  _id?: string;
  slug?: string;
  name: string;
  description?: string;
  price?: {
    price: number;
    discountedPrice?: number;
  };
  stock?: {
    quantity: number;
  };
  media?: {
    mainMedia?: {
      image?: {
        url: string;
      };
    };
    items?: Array<{
      image?: {
        url: string;
      };
    }>;
  };
  additionalInfoSections?: Array<{
    title: string;
    description: string;
  }>;
  variants?: VariantProductItem[];
  productOptions?: ProductOptionProductItem[];
};

export type VariantProductItem = {
  _id: string;
  option?: string; // Sometimes not provided by Wix
  value?: string; // Sometimes not provided by Wix
  price?: {
    price: number;
    discountedPrice?: number;
  };
  stock?: {
    quantity: number;
    trackQuantity?: boolean;
    inStock: boolean;
  };
  variant?: {
    priceData?: {
      price: number;
      discountedPrice: number;
      currency?: string;
    };
    convertedPriceData?: {
      price: number;
      discountedPrice: number;
      currency?: string;
    };
    weight?: number;
    sku?: string;
    visible?: boolean;
  };
  choices: Record<string, string>; // example: { "Color": "Red", "Size": "Large" }
};

export type ProductOptionProductItem = {
  name: string;
  choices: Array<{
    description: string;
    value: string;
  }>;
};

export type CollectionItem = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  numberOfProducts?: number;
  media?: {
    mainMedia?: {
      image?: {
        url: string;
      };
    };
  };
};

export type MyStoreInfoType = {
  plan: "simple-whatsapp" | "premium-wix";
  title: string;
  description: string;

  about: {
    mission: string;
    whyChooseUs: string[];
  };

  contact: {
    heading: string;
    description: string;
  };

  address: string;
  email: string;
  phone: string;
  mapEmbedUrl?: string;

  socialMedia: {
    facebook?: string | null;
    instagram?: string | null;
    youtube?: string | null;
    pinterest?: string | null;
    x?: string | null;
  };

  legal?: {
    title: string;
    intro: string;

    privacyPolicy: {
      heading: string;
      content: string[];
    };

    termsOfService: {
      heading: string;
      content: string[];
    };

    cookies: {
      heading: string;
      content: string[];
    };

    returns: {
      heading: string;
      content: string[];
    };
  };
  customerService?: {
  title: string;
  intro: string;
  sections: {
    heading: string;
    content: string[];
  }[];
};
};





export type PaginationType = {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
};

export type MoneyValue = {
  amount: string;
  convertedAmount: string;
  formattedAmount: string;
  formattedConvertedAmount: string;
};

type DescriptionLine = {
  name: {
    original: string;
    translated: string;
  };
  colorInfo?: {
    original: string;
    translated: string;
    code?: string;
  };
  lineType: string; // Example: "UNRECOGNISED"
  modifierDescriptionLine: boolean;
};

export type CartItem = {
  id: string;
  quantity: number;
  name?: string;
  price?: string; // 💡 Safer for rendering (formattedAmount as string)
  image: string;
  descriptionLines: DescriptionLine[];
  availability: {
    status: string;
    quantityAvailable: number
  }
  catalogReference?: {
    appId: string;
    catalogItemId: string;
    options?: {
      variantId?: string;
    };
  };
};

export type Cart = {
  _id: string;
  _createdDate: string;
  _updatedDate: string;
  buyerInfo: {
    contactId: string;
    memberId: string;
  };
  buyerLanguage: string;
  siteLanguage: string;
  currency: string;
  paymentCurrency: string;
  conversionCurrency: string;
  taxIncludedInPrices: boolean;
  weightUnit: string;
  purchaseFlowId: string;
  managedByV2: boolean;

  appliedDiscounts: any[];
  discount: MoneyValue;
  subtotal: MoneyValue;
  subtotalAfterDiscounts: MoneyValue;

  lineItems: CartItem[];
};

/// AUTH

// Shared base
export type BaseAuthDTO = {
  email: string;
  password?: string;
}

// LOGIN
export interface LoginDTO extends BaseAuthDTO {
  mode: MODE.LOGIN;
}

// REGISTER
export interface RegisterDTO extends BaseAuthDTO {
  mode: MODE.REGISTER;
  username: string;
}

// RESET PASSWORD
export interface ResetPasswordDTO {
  mode: MODE.RESET_PASSWORD;
  email: string;
}

// EMAIL VERIFICATION
export interface EmailVerificationDTO {
  mode: MODE.EMAIL_VERIFICATION;
  emailCode: string;
}

export type AuthDTO =
  | LoginDTO
  | RegisterDTO
  | ResetPasswordDTO
  | EmailVerificationDTO;

/// GLOBAL CONTEXT

export type SelectVariantGlobalType = {
  selectedVariant: undefined | VariantProductItem;
  setSelectedVariant: (newVariant: VariantProductItem) => void;
};

export type CollectionStoreType = {
  collections: CollectionItem[] | null;
  setCollections: (newCollections: CollectionItem[]) => void;
};

export interface AuthState {
  isLoggedIn: boolean;
  loading: boolean;
  setIsLoggedIn: (value: boolean) => void;
  setLoading: (value: boolean) => void;
}

export type CartState = {
  cart: Cart | null;
  isLoading: boolean;
  counter: number;
  getCart: () => void;
  addItem: (productId: string, variantId: string, quantity: number) => void;
  removeItem: (itemId: string) => void;
  clearCart:()=> void;
};

export type ModalState = {
  isProfileOpen :boolean;
  setIsProfileOpen: ()=> void;
  isCartOpen: boolean;
  setIsCartOpen: ()=> void;


}
