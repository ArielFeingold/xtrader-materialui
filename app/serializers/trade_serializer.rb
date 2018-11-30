class TradeSerializer < ActiveModel::Serializer
  attributes :id, :amount, :price, :type, :created_at
end
