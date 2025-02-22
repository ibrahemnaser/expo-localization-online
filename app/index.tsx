import useFetchTranslation from '@/hooks/useFetchTranslation';
import i18n, { translate } from '@/locale';
import { useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

const URL_ =
  'https://tekeya.io/uploads/language_import/5ee4fdbd9fcff735bcdcb71ee2f84f73.xlsx';

const SHEET_ID = '1pc-UVA6r7UPr7i9o-_4QegdRT87JybyF4NNhu7YkdlU';
const GOOGLE_SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export/export?format=xlsx`;

export default function Home() {
  const [changeLanguageLoading, setChangeLanguageLoading] = useState(false);
  const { isLoading, fetchLocalesFromServer } = useFetchTranslation();

  const handleFetchTranslation = async () => {
    setChangeLanguageLoading(true);
    const trns_file = await fetchLocalesFromServer(GOOGLE_SHEET_URL, true);
    if (!trns_file) return;

    i18n.store(trns_file);
    console.log('TRNS__FILE::: ', Object.keys(trns_file));
    setChangeLanguageLoading(false);
  };

  const handleChangeLocale = (lang: string) => {
    setChangeLanguageLoading(true);
    i18n.locale = lang;

    setTimeout(() => {
      setChangeLanguageLoading(false);
    }, 100);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen hello.</Text>

      <TouchableOpacity
        onPress={handleFetchTranslation}
        style={{
          backgroundColor: 'gray',
          padding: 10,
          borderRadius: 8,
          marginTop: 10,
        }}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color={'white'} size={22} />
        ) : (
          <Text style={{ color: 'white' }}>Fetch Translation</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleChangeLocale('en')}
        style={{
          backgroundColor: 'gray',
          padding: 10,
          borderRadius: 8,
          marginTop: 10,
        }}
        disabled={isLoading}
      >
        <Text style={{ color: 'white' }}>Change to English</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleChangeLocale('ar')}
        style={{
          backgroundColor: 'gray',
          padding: 10,
          borderRadius: 8,
          marginTop: 10,
        }}
        disabled={isLoading}
      >
        <Text style={{ color: 'white' }}>Change to Arabic</Text>
      </TouchableOpacity>

      {isLoading ? null : (
        <View>
          <Text>Watch:: {changeLanguageLoading ? '' : translate('pass')}</Text>
        </View>
      )}
    </View>
  );
}
