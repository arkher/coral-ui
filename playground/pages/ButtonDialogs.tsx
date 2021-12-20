import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Box, Button, Text, Pressable } from '../../src/components';

const ButtonDialogs: React.FC = () => (
  <>
    <StatusBar />

    <ScrollView>
      <Box padding="sm" backgroundColor="white">
        <Text>Variantes</Text>

        <Button variant="primary" mt="sm" onPress={() => undefined}>
          Primary
        </Button>

        <Button variant="secondary" mt="sm" onPress={() => undefined}>
          Secondary
        </Button>

        <Button variant="tertiary" mt="sm" onPress={() => undefined}>
          Tertiary
        </Button>

        <Text>Variantes with icons</Text>

        <Button
          variant="primary"
          icon="check-circle"
          mt="sm"
          onPress={() => undefined}
        >
          Primary
        </Button>

        <Button
          variant="secondary"
          icon="check-circle-outline"
          mt="sm"
          onPress={() => undefined}
        >
          Secondary
        </Button>

        <Button
          variant="tertiary"
          icon="download-outline"
          mt="sm"
          onPress={() => undefined}
        >
          Tertiary
        </Button>

        <Text mt="md">Loadings</Text>

        <Box flexDirection="row" justifyContent="space-around">
          <Button
            variant="primary"
            loading
            mt="sm"
            width={{ phone: 40, tablet: 60 }}
            onPress={() => undefined}
          >
            Primary
          </Button>

          <Button
            variant="secondary"
            loading
            mt="sm"
            width={{ phone: 40, tablet: 60 }}
            onPress={() => undefined}
          >
            Secondary
          </Button>

          <Button
            variant="tertiary"
            loading
            mt="sm"
            width={{ phone: 40, tablet: 60 }}
            onPress={() => undefined}
          >
            Tertiary
          </Button>
        </Box>

        <Text mt="md">Disable</Text>

        <Button variant="primary" disabled mt="sm" onPress={() => undefined}>
          Primary Disable
        </Button>

        <Button variant="secondary" disabled mt="sm" onPress={() => undefined}>
          Secondary Disable
        </Button>

        <Button variant="tertiary" disabled mt="sm" onPress={() => undefined}>
          Tertiary Disable
        </Button>

        <Text>Buttons inline</Text>
        <Box flex={1} flexDirection="row">
          <Button
            variant="secondary"
            mt="sm"
            mr="nano"
            onPress={() => undefined}
          >
            Secondary
          </Button>
          <Button variant="primary" mt="sm" onPress={() => undefined}>
            Primary
          </Button>
        </Box>

        <Text>Pressable</Text>
        <Box flex={1} flexDirection="row">
          <Pressable alignItems="center" p="sm" mt="sm">
            <Text>Pressable</Text>
          </Pressable>
        </Box>
      </Box>
    </ScrollView>
  </>
);

export default ButtonDialogs;
