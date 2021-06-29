import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemedAwesomeView } from '../components/custom-components';
import { Divider, Layout, Text, Icon, Button, TopNavigation } from '@ui-kitten/components';
import { PESDK, Configuration, TintMode } from 'react-native-photoeditorsdk';

export const HomeScreen = ({ navigation }) => {

    const openEditor = () => {
      // Set up sample image
      let image = require('../assets/images/LA.jpg');
      // Set up configuration
      let configuration: Configuration = {
        // Configure sticker tool
        sticker: {
          // Enable personal stickers
          personalStickers: true,
          // Configure stickers
          categories: [
            // Create sticker category with stickers
            {
              identifier: 'example_sticker_category_logos',
              name: 'Logos',
              thumbnailURI: require('../assets/images/React-Logo.png'),
              items: [
                {
                  identifier: 'example_sticker_logos_react',
                  name: 'React',
                  stickerURI: require('../assets/images/React-Logo.png'),
                },
                {
                  identifier: 'example_sticker_logos_imgly',
                  name: 'img.ly',
                  stickerURI: require('../assets/images/imgly-Logo.png'),
                  tintMode: TintMode.SOLID,
                },
              ],
            },
            // Use existing sticker category
            { identifier: 'imgly_sticker_category_emoticons' },
            // Modify existing sticker category
            {
              identifier: 'imgly_sticker_category_shapes',
              items: [
                { identifier: 'imgly_sticker_shapes_badge_01' },
                { identifier: 'imgly_sticker_shapes_arrow_02' },
                { identifier: 'imgly_sticker_shapes_spray_03' },
              ],
            },
          ],
        },
      };
      PESDK.openEditor(image, configuration).then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        },
      );
    };
    const navigateDetails = () => {
        navigation.navigate('Details');
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='MyApp' alignment='center' />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button onPress={openEditor}>Open Image</Button>
            </Layout>
            <ThemedAwesomeView />
        </SafeAreaView>
    )
};

const FacebookIcon = (props) => (
    <Icon name='facebook' {...props} />
);