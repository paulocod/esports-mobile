import { Text, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';

import { GameController } from 'phosphor-react-native';

import { styles } from './styles';

export interface DuoCardProps {
  id: string,
  name: string,
  discord: string,
  yearsPlaying: number
  weekDays: string,
  hoursStart: number,
  hourEnd: number,
  useVoiceChannel: boolean,
}

interface Props {
  data: DuoCardProps,
  onConnect: () => void
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label='nome'
        value={data.name} />
      <DuoInfo
        label='Tempo de Jogo'
        value={`${data.yearsPlaying} anos`} />
      <DuoInfo
        label='Disponibilidade'
        value={`${data.weekDays.length} dias \u2022 ${data.hoursStart} - ${data.hourEnd}`} />
      <DuoInfo
        label='Chamada de áudio'
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onConnect}
      >
        <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        />
        <Text
          style={styles.buttonTitle}
        >
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}