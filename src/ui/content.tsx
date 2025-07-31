import GridSection from "./GridSection";

function Content() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-12 py-24">
        <GridSection
          title="Introduction"
          content="This project introduces a system that transforms a song into its binaural audio experience by analyzing the context and nuance within the song to generate an immersive experience. Initially, for simplicity, our focus is on translating lyrical cues into spatial audio. For instance, a literal interpretation of the lyric, 'If I slip, I'll fall into a better situation' could trigger a corresponding downward movement of the vocal track. The system can also analyze structural cues in a song. For example, in a song featuring a back and forth dialogue between artists, their voices could be placed in opposing ears to create a sense of space and interaction. Keep reading to understand how we plan to achieve this."
          imageUrl="https://8vjfu80j4c.ufs.sh/f/WxwgvH28Klu0hFMaO9xzI1ma57xsMO9lJFZuAkSEfRdVvY2g"
          imageAlt="Binaural Audio Visualization"
        />

        <GridSection
          title="1. Stem Seperation"
          content="Since we are working without access to the song's original master tracks, we lack fine control over the audio. To address this, we first deconstruct the song by using Facebook's Demucs model to separate the track into its constituent stems (e.g., vocals, drums, bass). This process allows us to essentially rebuild the song from its core pieces later on. For simplicity, we are focusing only on the vocal stem. The core idea is to splice the vocal track into smaller segments that can be spatially positioned after our lyrical analysis is complete."
          imageUrl="https://8vjfu80j4c.ufs.sh/f/WxwgvH28Klu0MSKZg1EYA3NoLhaYPifRkZyTOB0pCKGenIdw"
          imageAlt="Audio Waveform Analysis"
          reverse={true}
        />

        <GridSection
          title="2. Speaker Diarisation"
          content="Once we have the vocal stem, we process it using WhisperX to obtain precise, word level timestamps and identify which artist is speaking. Following this, a fine tuned language model analyzes the transcript to group words into coherent lines. The vocal track is then spliced into audio segments corresponding to these identified lines. A second fine tuned LLM predicts appropriate spatial position for each segment based on its lyrical content."
          imageUrl="https://8vjfu80j4c.ufs.sh/f/WxwgvH28Klu0PUGthTRo1JfbhvQtnZzL8aSHI4e3D6OBT9rW"
          imageAlt="Speaker Diarisation Process"
        />

        <GridSection
          title="3. All together"
          content="The final stage of the pipeline begins with the predicted spatial positions for each vocal segment. We use a custom developed Python library that provides a simple, object oriented interface for spatializing audio. Each vocal segment is processed individually and rendered into its predicted 3D position. These spatialized segments are then appended together to create the final, binaural vocal track. Finally, this track is combined with the other instrumental stems (drums, bass, etc.) to produce the complete, immersive song."
          imageUrl="https://8vjfu80j4c.ufs.sh/f/WxwgvH28Klu0z0FXpd3W4IacxweF9qVPCyupvt2hLN7Ski6Y"
          imageAlt="3D Audio Positioning Grid"
          reverse={true}
        />

        <div className="mt-24 pt-16 border-t border-stone-200">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 font-mono text-stone-800">
              Stay tuned!
            </h2>
            <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
