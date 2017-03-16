module Api::V1
  class NotesController < ApiController
    before_action :set_note, only: [:show, :update, :destroy]

    def index
      notes = Note.all

      render json: notes
    end

    def show
      render json: @note
    end

    def create
      note = Note.new(note_params)

      if note.save
        render json: note, status: :created, location: note
      else
        render_error(note, :unprocessable_entity)
      end
    end

    def update
      if @note.update_attributes(note_params)
        render json: @note, status: :ok
      else
        render_error(@note, :unprocessable_entity)
      end
    end

    def destroy
      @note.destroy
      head 204
    end

    private
      def set_note
        begin
          @note = Note.find(params[:id])
        rescue ActiveRecord::RecordNotFound
          note = Note.new
          note.errors.add(:id, "Wrong ID provided")
          render_error(note, 404) and return
        end
      end

      def note_params
         ActiveModelSerializers::Deserialization.jsonapi_parse(params)
      end
  end
end
