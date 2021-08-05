import {Platform} from "react-native";
export const fonts = {
    Montserrat_Black:Platform.OS =='ios' ? 'Montserrat-Black':'MontserratBlack',
    Montserrat_BlackItalic:Platform.OS =='ios' ? 'Montserrat-BlackItalic':'MontserratBlackItalic',
    lato_regulat:Platform.OS =='ios' ? 'Lato-Regular':'LatoRegular',
    lato_bold:Platform.OS =='ios' ? 'Lato-Bold':'LatoBold',
    lato_medium:Platform.OS =='ios' ? 'Lato-Medium':'LatoMedium',
    lato_semi_bold:Platform.OS =='ios' ? 'Lato-Semibold':'LatoSemibold',
    sfui_text_medium:Platform.OS =='ios' ? 'SFUIText-Medium':'SFUITextMedium',
    arial_bold:Platform.OS =='ios' ? 'Arial-BoldMT':'arialbd',
    arial:Platform.OS =='ios' ? 'Arial':'Arial',
    arail_italic:Platform.OS =='ios' ? 'Arial-ItalicMT':'ArialItalic',
    aven_roman:Platform.OS =='ios' ? 'AvenirLTStd-Roman':'AvenirLTStdRoman',
    helvetica_neue_bold:Platform.OS =='ios' ? 'HelveticaNeue-Bold':'HelveticaNeueBold',
    sf_pro_regular:Platform.OS =='ios' ? 'SFProText-Regular':'SFProTextRegular',
};